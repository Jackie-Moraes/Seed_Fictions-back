import { authRepository } from "../repositories/authRepository.js"

export async function checkEmail(email: string) {
    const emailIsRegistered = await authRepository.checkIfEmailExists(email)

    if (!emailIsRegistered) {
        throw { type: "wrongAuthInfo", message: "Email or password incorrect." }
    }

    return emailIsRegistered
}
