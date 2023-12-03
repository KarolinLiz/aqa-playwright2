import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import { CREATED_CAR } from "../pom/fixtures/cars-controllers-fixtures.js";
import APIClient from "../../src/pageObjects/client/ApiClient.js";

test.describe("API", () => {
    let client
    let newCarId

    test.beforeAll(async () => {
        client = await APIClient.authenticate(undefined, {
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
    })

    test.only("Should create new car", async () => {
        const response = await client.cars.createCar(CREATED_CAR)
        console.log(response.data)
        newCarId = response.data.data.id
        console.log(newCarId)
        expect(response.status, "Status code should be 200").toEqual(201)
        expect(response.data.data, "The new car should be returned").toEqual(expect.objectContaining(CREATED_CAR))
        
    })
})