import { NextFunction, Request, Response } from "express"

import signInSchema from "./schemas/signInSchema.js"
import signUpSchema from "./schemas/signUpSchema.js"

export async function validateSignUp(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = signUpSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error.message }
    }

    next()
}

export async function validateSignIn(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const validation = signInSchema.validate(req.body)
    if (validation.error) {
        throw { type: "validationError", message: validation.error.message }
    }

    next()
}
