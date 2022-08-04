import { Request, Response } from "express"

import { authService } from "../services/authService.js"

export async function signUp(req: Request, res: Response) {
    await authService.userSignUp(req.body)
    return res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const token = await authService.userSignIn(req.body)
    return res.status(200).send({ token })
}

export const authController = { signUp, signIn }
