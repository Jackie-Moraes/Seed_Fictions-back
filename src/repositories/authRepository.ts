import bcrypt from "bcrypt"

import { client } from "../config/database.js"

async function checkIfEmailExists(email: string) {
    const exists = await client.users.findUnique({
        where: {
            email,
        },
    })
    return exists
}

async function userSignUp(
    email: string,
    password: string,
    pictureURL: string | null
) {
    const passwordHash = bcrypt.hashSync(password, 10)

    await client.users.create({
        data: {
            email,
            password: passwordHash,
            pictureURL,
        },
    })
}

async function userSignIn(name: string, userId: number) {
    await client.sessions.create({
        data: {
            userId,
            name,
        },
    })
}

export const authRepository = {
    checkIfEmailExists,
    userSignUp,
    userSignIn,
}
