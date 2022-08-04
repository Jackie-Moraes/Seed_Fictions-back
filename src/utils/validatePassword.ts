import bcrypt from "bcrypt"

export async function validatePassword(credentials: string, password: string) {
    const passwordCheck = bcrypt.compareSync(password, credentials)
    if (!passwordCheck) {
        throw { type: "wrongAuthInfo", message: "Email or password incorrect." }
    }
}
