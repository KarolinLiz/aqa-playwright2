import { expect, test } from "@playwright/test";
import APIClient from "../../../../src/pageObjects/client/APIClient.js"
import CreateCarModel from "../../../../src/pageObjects/models/cars/CreateCarModel.js";
import { USERS } from "../../../../src/pageObjects/data/dict/users.js";
import { VALID_BRANDS_RESPONSE_BODY } from "../../../../src/pageObjects/data/dict/brands.js"
import { VALID_BRAND_MODELS } from "../../../../src/pageObjects/data/dict/models.js"

test.describe('Cars', () => {
    let client

    test.beforeAll(async () => {
        client = await APIClient.authenticate({
            "email": USERS.JOE_DOU.email,
            "password": USERS.JOE_DOU.password,
            "remember": false
        })
    })

    test.only('Should create car with valid data', async () => {
        const carModel = new CreateCarModel({ carBrandId: 3, carModelId: 12, mileage: 34 })
        const brand = VALID_BRANDS_RESPONSE_BODY.data.find((brand) => brand.id === carModel.carBrandId)
        const model = VALID_BRAND_MODELS[brand.id].data.find((model) => model.id === carModel.carModelId)

        const response = await client.cars.createCar(carModel)

        const expectedBody = {
            id: expect.any(Number),
            ...carModel,
            initialMileage: carModel.mileage,
            updatedMileageAt: expect.any(String),
            carCreatedAt: expect.any(String),
            brand: brand.title,
            model: model.title,
            logo: brand.logoFilename
        }
        const newCarId = response.data.data.id

        const response2 = await client.cars.deleteCarById(newCarId)
        expect(response.data.data, 'Returned car object should be valid').toEqual(expectedBody)
    })
})