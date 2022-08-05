import { chaptersRepository } from "../repositories/chaptersRepository.js"

export async function checkIfStoryBelongsToUser(
    userId: number,
    storyId: number
) {
    const exists = await chaptersRepository.checkStoryOwner(userId, storyId)
    if (!exists) {
        throw { type: "unauthorized", message: "Operation could not proceed." }
    }
}
