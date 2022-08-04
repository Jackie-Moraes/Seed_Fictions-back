import { NextFunction, Request, Response } from "express"

export default async function handleErrors(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Schema Errors
    if (error.type === "validationError") {
        return res.status(422).send(error.message)
    }

    // Token Errors
    if (error.type === "tokenError") {
        return res.status(401).send(error.message)
    }

    // Sign Up Errors
    if (error.type === "emailAlreadyInUse") {
        return res.status(409).send(error.message)
    }

    // Sign In Errors
    if (error.type === "wrongAuthInfo") {
        return res.status(422).send(error.message)
    }

    // Unauthorized Errors
    if (error.type === "unauthorized") {
        return res.status(401).send(error.message)
    }
    return res.sendStatus(500)
}
