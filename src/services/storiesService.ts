import { stories } from "@prisma/client"

import { insertNewStory } from "../utils/insertNewStory.js"
import { insertUserToStoryCorrelation } from "../utils/insertUserToStoryCorrelation.js"

import { storiesRepository } from "../repositories/storiesRepository.js"

export type createStory = Omit<
    stories,
    "id" | "views" | "isFinished" | "createdAt"
>

export const storiesService = {
    async createNewStory(story: createStory, userId: number) {
        const storyInfo = await insertNewStory(story)
        const storyId = storyInfo.id

        await insertUserToStoryCorrelation(storyId, userId)
    },

    async getRecentStories(page: number) {
        const stories = await storiesRepository.getRecentStories(page)
        return stories
    },

    async getStoriesByName(searchName: string, page: number) {
        const stories = await storiesRepository.getFilteredStories(
            searchName,
            page
        )
        return stories
    },

    async getStoryById(storyId: number) {
        const story = await storiesRepository.getStoryById(storyId)
        return story
    },
}
