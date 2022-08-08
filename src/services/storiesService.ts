import { stories } from "@prisma/client"

import { insertNewStory } from "../utils/insertNewStory.js"
import { insertUserToStoryCorrelation } from "../utils/insertUserToStoryCorrelation.js"
import { insertCategoriesToStory } from "../utils/insertCategoriesToStory.js"
import { insertGenresToStory } from "../utils/insertGenresToStory.js"
import { insertWarningsToStory } from "../utils/insertWarningsToStory.js"
import { insertTagToStory } from "../utils/insertTagsToStory.js"

import { storiesRepository } from "../repositories/storiesRepository.js"
import { checkIfTagExists } from "../utils/checkIfTagExists.js"
import { createTag } from "../utils/createTag.js"

type storyTemplate = Omit<stories, "id" | "views" | "isFinished" | "createdAt">

export type createStory = storyTemplate & {
    categoriesId: number[]
    warningsId: number[]
    genresId: number[]
    tags: string[]
}

export const storiesService = {
    async createNewStory(story: createStory, userId: number) {
        const storyInfo = await insertNewStory(story)
        const storyId = storyInfo.id

        await insertUserToStoryCorrelation(storyId, userId)
        await insertCategoriesToStory(storyId, story.categoriesId)
        await insertGenresToStory(storyId, story.genresId)

        if (story.warningsId.length > 0) {
            await insertWarningsToStory(storyId, story.warningsId)
        }

        if (story.tags.length > 0) {
            for (let i = 0; i < story.tags.length; i++) {
                const tag = story.tags[i]

                let exists: any = await checkIfTagExists(tag)

                if (!exists) {
                    const tagInfo = await createTag(tag)
                    exists = true
                    exists.id = tagInfo.id
                }

                await insertTagToStory(storyId, exists.id)
            }
        }

        return storyId
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
        await storiesRepository.increaseStoryViews(storyId)
        const story = await storiesRepository.getStoryById(storyId)
        return story
    },
}
