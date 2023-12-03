import { test } from "../../src/pageObjects/fixtures/test.fixtures.js";
import { expect } from "@playwright/test";
import { USERS } from "../../src/pageObjects/data/dict/users.js"
import APIClient from "../../src/pageObjects/client/ApiClient.js";
import { CARS_BRANDS } from "../pom/fixtures/cars-controllers-fixtures.js"
import { CARS_MODELS_LEAST } from "../pom/fixtures/cars-controllers-fixtures.js"
import { VALID_BRANDS_MODELS } from "../pom/fixtures/cars-controllers-fixtures.js"
import { CREATED_CAR } from "../pom/fixtures/cars-controllers-fixtures.js"
import { LIST_OF_CARS_BRANDS } from "../pom/fixtures/cars-controllers-fixtures.js"
import { LIST_OF_CURRENT_USER_CARS } from "../pom/fixtures/cars-controllers-fixtures.js"
import {VALID_BRANDS_RESPONSE_BODY} from "../../src/pageObjects/data/dict/brands.js"
import {VALID_BRAND_MODELS} from "../../src/pageObjects/data/dict/models.js"

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

        expect(response.status, "Status code should be 200").toEqual(200)
        expect(response.data, "The list of btands should be returned").toEqual(LIST_OF_CARS_BRANDS)
    })

        test("Should return cars brands by id", async () => {
            const response = await client.cars.getCarBrandById(3)

            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data.data, "Brand should be Ford").toEqual(CARS_BRANDS)
        })

        test("Should return cars models", async () => {
            const response = await client.cars.getCarsModels()

            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data, "The least of models should be returned").toEqual(CARS_MODELS_LEAST)

        })

        for (const brand of VALID_BRANDS_RESPONSE_BODY.data) {
        test(`Should return models for ${brand.title}`, async () => {
            const brandId = brand.id
            const response = await client.cars.getCarModelById(brandId)
            const body = response.data

            expect(response.status, "Status code should be 200").toEqual(200)
            expect(body, "The model by id should be returned").toEqual(VALID_BRAND_MODELS[brandId])

        })
    }

        test("Should return current user's cars", async () => {
            const response = await client.cars.getUserCars()

            expect(response.status, "Status code should be 200").toEqual(200)
            expect(response.data, "The list of users cars should be returned").toEqual(LIST_OF_CURRENT_USER_CARS)
        })

        test("Should get user's car by id", async () => {
            const response1 = await client.cars.createCar(CREATED_CAR)
            const newCarId = response1.data.data.id
            const response2 = await client.cars.getUsersCarById(newCarId)
            const response3 = await client.cars.deleteCarById(newCarId)

            expect(response2.status, "Status code should be 200").toEqual(200)
            expect(response2.data.data, "The least of models should be returned").toEqual(CREATED_CAR)
        })

})
