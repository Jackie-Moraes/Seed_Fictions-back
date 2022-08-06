import { storiesRepository } from "../repositories/storiesRepository.js"

export async function insertCategoriesToStory(
    storyId: number,
    categoriesIds: number[]
) {
    await storiesRepository.insertStoryCategories(storyId, categoriesIds)
}
