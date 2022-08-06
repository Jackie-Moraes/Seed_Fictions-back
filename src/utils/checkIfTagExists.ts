import { storiesRepository } from "../repositories/storiesRepository.js"

export async function checkIfTagExists(name: string) {
    const exists = await storiesRepository.checkIfTagExists(name)
    return exists
}
