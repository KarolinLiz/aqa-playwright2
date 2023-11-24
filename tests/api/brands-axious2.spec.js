import {test} from "../../src/pageObjects/fixtures/test.fixtures.js";
import {expect} from "@playwright/test";
import {USERS} from "../../src/pageObjects/data/dict/users.js"
import axios from "axios";
import { testConfig } from "../../config/config.js";
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';
import { VALID_CREATED_CAR_RESPONSE_BODY } from "../../src/pageObjects/data/dict/validCreatedCar.js";

test.describe("API", ()=>{
let client

test.beforeAll(async()=>{
    const jar = new CookieJar();
     client = wrapper(axios.create({
        baseURL : testConfig.apiURL,
        jar,
        validateStatus: status =>{
            return status < 501
        }
    }))
   const responceLogin = await client.post('auth/signin',{
    "email": USERS.JOE_DOU.email,
    "password": USERS.JOE_DOU.password,
    "remember": false
})

console.log(responceLogin)
})

 test("should return valid brands", async ()=>{
       const response = await client.get('cars')

        expect(response.status, "Status code should be 200").toEqual(200)
    })

 test("should create new car", async ()=>{
    const response = await client({
        method: 'post',
        url: 'cars',
        data: {
            "carBrandId": 1,
            "carModelId": 2,
            "mileage": 123
            }
})
             
    expect(response.status, "Status code should be 201").toEqual(201)
    expect(response.data, "Valid brands should be returned").toEqual(VALID_CREATED_CAR_RESPONSE_BODY)
           
}),

test("shouldn't create any car", async ()=>{
    const response = await client({
        method: 'post',
        url: 'cars',
        data: {
            "carBrandId": 1,
            "carModelId": 2,
            "mileage": "zero"
            }
                  
})
    console.log(response)
    expect(response.status, "Status code should be 400").toEqual(400)
    expect(response.data.status, "Status should be error").toEqual('error')
    expect(response.data.message, "If user enters incorrect mileage, there should be message 'Invalid mileage type'").toEqual('Invalid mileage type')
}),  
                
test.only("No cars could be created with negative mileage", async ()=>{
        const response = await client({
            method: 'post',
            url: 'cars',
            data: {
                "carBrandId": 1,
                "carModelId": 2,
                "mileage": "-67"
                }
                      
})
    console.log(response)
    expect(response.status, "Status code should be 400").toEqual(400)
    expect(response.data.status, "Status should be error").toEqual('error')
    expect(response.data.message, "If user enters negative mileage, there should be message 'Invalid mileage type'").toEqual('Mileage has to be from 0 to 999999')
})
})            
   