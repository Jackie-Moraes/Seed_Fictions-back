import { storiesRepository } from "../repositories/storiesRepository.js"

export async function insertWarningsToStory(
    storyId: number,
    warningsId: number[]
) {
    await storiesRepository.insertStoryWarnings(storyId, warningsId)
}
