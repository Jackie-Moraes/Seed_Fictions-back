import bcrypt from "bcrypt"

import { client } from "../config/database.js"

export const authRepository = {
    async checkIfEmailExists(email: string) {
        const exists = await client.users.findUnique({
            where: {
                email,
            },
        })
        return exists
    },

    async userSignUp(
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
    },

    async userSignIn(name: string, userId: number) {
        await client.sessions.create({
            data: {
                userId,
                name,
            },
        })
    },

    async checkTokenOwnership(name: string) {
        const exists = await client.sessions.findFirst({
            where: {
                name,
            },
        })
        return exists
    },
}
