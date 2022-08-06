import { storiesRepository } from "../repositories/storiesRepository.js"

export async function insertTagToStory(storyId: number, tagId: number) {
    await storiesRepository.insertStoryTags(storyId, tagId)
}
