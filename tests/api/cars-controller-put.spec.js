import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import APIClient from "../../src/pageObjects/client/ApiClient.js";
import { CREATED_CAR } from "../pom/fixtures/cars-controllers-fixtures.js"
import { EDIT_CAR_BODY } from "../pom/fixtures/cars-controllers-fixtures.js"

test.describe("API", () => {
    let client

    test.beforeAll(async () => {
        client = await APIClient.authenticate(undefined, {
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
        
    
    })

    test("Should edit existing car by id", async () => {
        const response1 = await client.cars.createCar(CREATED_CAR)
        const id = response1.data.data.id
        const response2 = await client.cars.modifyExistCarById(id,EDIT_CAR_BODY)

        const response3 = await client.cars.deleteCarById(id)
        expect(response2.status, "Status code should be 200").toEqual(200)
        expect(response2.data.data, "The edited car should be returned").toEqual(expect.objectContaining({"mileage": 323,}))
    })
})