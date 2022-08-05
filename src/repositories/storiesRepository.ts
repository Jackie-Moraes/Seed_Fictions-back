import { client } from "../config/database.js"
import { createStory } from "../services/storiesService.js"

export const storiesRepository = {
    async createStory(story: createStory) {
        const newStory = await client.stories.create({
            data: {
                name: story.name,
                description: story.description,
                bannerURL: story.bannerURL,
                languageId: story.languageId,
            },
        })
        return newStory
    },

    async insertStoryCreator(storyId: number, userId: number) {
        await client.storiesUsers.create({
            data: {
                storyId,
                userId,
            },
        })
    },
}
