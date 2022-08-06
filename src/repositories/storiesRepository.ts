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

    async getRecentStories(page: number) {
        const skipAmount = (page - 1) * 10

        const stories = await client.users.findMany({
            orderBy: { createdAt: "desc" },
            include: { storiesUsers: { include: { user: true } } },
            skip: skipAmount,
            take: 10,
        })
        return stories
    },

    async getFilteredStories(searchName: string, page: number) {
        const skipAmount = (page - 1) * 10

        const stories = await client.stories.findMany({
            where: { name: { contains: searchName } },
            include: { storiesUsers: { include: { user: true } } },
            orderBy: {
                _relevance: {
                    fields: ["name"],
                    search: searchName,
                    sort: "asc",
                },
            },
            skip: skipAmount,
            take: 10,
        })
        return stories
    },
}
