import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import APIClient from "../../src/pageObjects/client/ApiClient.js";
import { CARS_BRANDS } from "../pom/fixtures/cars-controllers-fixtures.js"
import { CARS_MODELS_LEAST } from "../pom/fixtures/cars-controllers-fixtures.js"
import { CARS_MODEL_WITD_ID_4 } from "../pom/fixtures/cars-controllers-fixtures.js"
import { CREATED_CAR } from "../pom/fixtures/cars-controllers-fixtures.js"

test.describe("API", () => {
    let client

    test.beforeAll(async () => {
        client = await APIClient.authenticate(undefined, {
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
    })

    test("Should return cars brands", async () => {
        const response = await client.cars.getCarsBrands()
        console.log(response.data)
        expect(response.status, "Status code should be 200").toEqual(200)
    }),
        test("Should return cars brands by id", async () => {
            const response = await client.cars.getCarBrandById(3)

            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data.data, "Brand should be Ford").toEqual(CARS_BRANDS)
        }),
        test("Should return cars models", async () => {
            const response = await client.cars.getCarsModels()
            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data, "The least of models should be returned").toEqual(CARS_MODELS_LEAST)

        }),
        test("Should return model by id", async () => {
            const response = await client.cars.getCarModelById(4)
            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data, "The model by id should be returned").toEqual(CARS_MODEL_WITD_ID_4)

        }),

        test("Should return current user's cars", async () => {
            const response = await client.cars.getUserCars()
            expect(response.status, "Status code should be 200").toEqual(200)
        }),
        test("Should get user's car by id", async () => {
            const response1 = await client.cars.createCar(CREATED_CAR)
            const newCarId = response1.data.data.id
            const response2 = await client.cars.getUsersCarById(newCarId)
            expect(response2.status, "Status code should be 200").toEqual(200)
            expect(response2.data.data.id, "The least of models should be returned").toEqual(newCarId)
        })

})
