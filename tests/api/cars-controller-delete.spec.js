import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import APIClient from "../../src/pageObjects/client/ApiClient.js";
import { CREATED_CAR } from "../pom/fixtures/cars-controllers-fixtures.js"

test.describe("API", () => {
    let client
    let newCarId

    test.beforeAll(async () => {
        client = await APIClient.authenticate(undefined, {
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
        const response1 = await client.cars.createCar(CREATED_CAR)
        newCarId = response1.data.data.id
    })

    test("Should delete car by id", async () => {
        
        const response2 = await client.cars.deleteCarById(newCarId)
        const response3 = await client.cars.getCarBrandById(newCarId)

        expect(response2.status, "Status code should be 200").toEqual(200)
        expect(response3.status, "Status code should be 404").toEqual(404)

    })
})