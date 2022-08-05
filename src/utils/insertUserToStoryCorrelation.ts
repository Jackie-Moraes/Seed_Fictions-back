import { storiesRepository } from "../repositories/storiesRepository.js"

export async function insertUserToStoryCorrelation(
    storyId: number,
    userId: number
) {
    await storiesRepository.insertStoryCreator(storyId, userId)
}
