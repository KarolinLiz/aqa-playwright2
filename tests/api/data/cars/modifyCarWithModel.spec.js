import { expect, test } from "@playwright/test";
import APIClient from "../../../../src/pageObjects/client/APIClient.js"
import ModifyCarModel from "../../../../src/pageObjects/models/cars/ModifyCarModel.js";
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

    test('Should modify car with valid data', async () => {
        const carModel1 = new CreateCarModel({ carBrandId: 3, carModelId: 12, mileage: 34 })
        const response1 = await client.cars.createCar(carModel1)

        const id = response1.data.data.id

        const carModel = new ModifyCarModel({ carBrandId: 2, carModelId: 9, mileage: 66 })
        const brand = VALID_BRANDS_RESPONSE_BODY.data.find((brand) => brand.id === carModel.carBrandId)
        const model = VALID_BRAND_MODELS[brand.id].data.find((model) => model.id === carModel.carModelId)

        const response = await client.cars.modifyExistCarById(id, carModel)

        const expectedBody = {
            id: expect.any(Number),
            ...carModel,
            initialMileage: carModel1.mileage,
            updatedMileageAt: expect.any(String),
            carCreatedAt: expect.any(String),
            brand: brand.title,
            model: model.title,
            logo: brand.logoFilename
        }
        const response3 = await client.cars.deleteCarById(id)
        expect(response.data.data, 'Returned car object should be valid').toEqual(expectedBody)
    })
})