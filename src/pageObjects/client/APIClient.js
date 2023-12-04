import { CookieJar } from "tough-cookie";
import AuthController from "../controllers/AuthController";
import CarController from "../controllers/CarController";
import { config } from "../../../config/config.js"


export default class APIClient {
    constructor(options) {
        this.auth = new AuthController(options)
        this.cars = new CarController(options)
    }

    static async authenticate(userData, options = { baseUrl: config.apiURL }) {
        const jar = new CookieJar()
        const authController = new AuthController({ ...options, cookies: jar })
        await authController.signIn(userData)
        return new APIClient({ ...options, cookies: jar })

    }
}