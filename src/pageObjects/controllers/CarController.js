import CreateCarModel  from "../models/cars/CreateCarModel";
import BaseController from "./BaseController";

export default class CarController extends BaseController {
    #GET_CARS_BRANDS_PATH = 'cars/brands'
    #GET_BRANDS_BY_ID_PATH = 'cars/brands/#'
    #GET_CARS_MODELS_PATH = 'cars/models'
    #GET_MODELS_BY_ID_PATH = 'cars/models/#'
    #GET_USERS_CARS_PATH = 'cars'
    #CREATE_CAR_PATH = 'cars'
    #GET_USERS_CAR_BY_ID_PATH = 'cars/#'
    #MODIFY_EXIST_CAR_BY_ID_PATH = 'cars/#'
    #DELETE_CARS_BY_ID_PATH = 'cars/#'

    constructor(options) {
        super(options)
    }

    async getCarsBrands() {
        return this._client.get(this.#GET_CARS_BRANDS_PATH)

    }
    async getCarBrandById(id) {
        return this._client.get(this.#GET_BRANDS_BY_ID_PATH.replace('#', id))

    }
    async getCarsModels() {
        return this._client.get(this.#GET_CARS_MODELS_PATH)
    }
    async getCarModelById(id) {
        return this._client.get(this.#GET_MODELS_BY_ID_PATH.replace('#', id))

    }
    async getUserCars() {
        return this._client.get(this.#GET_USERS_CARS_PATH)

    }
    async createCar(data) {
        return this._client.post(this.#CREATE_CAR_PATH, data)

    }
    async getUsersCarById(id) {
        return this._client.get(this.#GET_USERS_CAR_BY_ID_PATH.replace('#', id))

    }
    async modifyExistCarById(id,data) {
        return this._client.put(this.#MODIFY_EXIST_CAR_BY_ID_PATH.replace('#', id),data)

    }
    async deleteCarById(id) {
        return this._client.delete(this.#DELETE_CARS_BY_ID_PATH.replace('#', id))
    }
}