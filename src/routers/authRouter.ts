import { Router } from "express"

import {
    validateSignIn,
    validateSignUp,
} from "../middlewares/validateInformation.js"
import { authController } from "../controllers/authController.js"

const authRouter = Router()

authRouter.post("/sign-up", validateSignUp, authController.signUp)
authRouter.post("/sign-in", validateSignIn, authController.signIn)

export default authRouter
