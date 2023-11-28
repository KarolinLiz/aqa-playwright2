import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { VALID_BRANDS_RESPONSE_BODY } from "../../src/pageObjects/data/dict/brands.js";
import { VALID_BRAND_MODELS } from "../../src/pageObjects/data/dict/models.js"
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import GaragePage from "../../src/pageObjects/garagePage/GaragePage.js"
import axios from "axios";
import { config as testConfig } from "../../config/config.js";

test.describe("API", () => {
    let client

    test.beforeAll(async () => {
        client = axios.create({
            baseURL: testConfig.apiURL,
        })
        const responceLogin = await client.post('auth/signin', {
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
        const cookie = responceLogin.headers["set-cookie"][0].split(';')[0]
        client = axios.create({
            baseURL: testConfig.apiURL,
            headers: {
                cookie
            },
            validateStatus: status => {
                return status < 501
            }
        })
        console.log(responceLogin)
    })

    test("should return valid brands", async () => {
        const response = await client.get('cars/brands')

        expect(response.status, "Status code should be 200").toEqual(200)
        expect(response.data, "Valid brands should be returned").toEqual(VALID_BRANDS_RESPONSE_BODY)
        // })
        // for (const brand of VALID_BRANDS_RESPONSE_BODY.data) {
        //     test(`should return valid models for ${brand.title} brand`, async ({userAPIClient})=>{
        //         const brandId = brand.id
        //         const response = await userAPIClient.fetch(`/api/cars/models?carBrandId=${brandId}`)
        //         const body = await response.json()

        //         await expect(response, "Positive response should be returned").toBeOK()
        //         console.log(JSON.stringify(body))
        //         expect(response.status(), "Status code should be 200").toEqual(200)
        //         expect(body, "Valid models should be returned").toEqual(VALID_BRAND_MODELS[brandId])
        //     })
        // }
        // test('should create new car', async ({userAPIClient})=>{
        //     const brandId = VALID_BRANDS_RESPONSE_BODY.data[1].id
        //     const modelId = VALID_BRAND_MODELS[brandId].data[1].id

        //     const requestBody = {
        //         "carBrandId": brandId,
        //         "carModelId": modelId,
        //         "mileage": 122
        // }


        //     const response = await userAPIClient.post('/api/cars', {
        //        data:requestBody
        //     })
        //     const body = await response.json()
        //     await expect(response, "Positive response should be returned").toBeOK()
        //     expect(response.status(), "Status code should be 200").toEqual(201)
        //     // console.log(JSON.stringify(body))
        //     expect(body.status).toBe("ok")
        //     expect(body.data, "Car should be created with data from request").toMatchObject(requestBody)
    })
})
