import { users } from "@prisma/client"

import { ensureEmailIsNotInUse } from "../utils/ensureEmailIsNotInUse.js"
import { createAccount } from "../utils/createAccount.js"
import { checkEmail } from "../utils/checkEmail.js"
import { validatePassword } from "../utils/validatePassword.js"
import { createAndSendToken } from "../utils/createAndSendToken.js"

export type userData = Omit<users, "id" | "createdAt" | "pictureURL">
export type createUser = Omit<users, "id" | "createdAt">

export const authService = {
    async userSignUp(body: createUser) {
        await ensureEmailIsNotInUse(body.email)

        await createAccount(body)
    },

    async userSignIn(body: userData) {
        const credentials = await checkEmail(body.email)
        await validatePassword(credentials.password, body.password)

        return await createAndSendToken(credentials.id, body.email)
    },
}
