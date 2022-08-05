import { storiesRepository } from "../repositories/storiesRepository.js"

import { createStory } from "../services/storiesService.js"

export async function insertNewStory(story: createStory) {
    const storyObject = await storiesRepository.createStory(story)
    return storyObject
}
