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

        const stories = await client.stories.findMany({
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                name: true,
                description: true,
                views: true,
                isFinished: true,
                bannerURL: true,
                language: { select: { name: true } },
                storiesCategories: { select: { category: true } },
                storiesGenres: { select: { genre: true } },
                storiesTags: { select: { tag: true } },
                storiesWarnings: { select: { warning: true } },
                storiesUsers: {
                    select: { user: { select: { id: true, name: true } } },
                },
            },
            skip: skipAmount,
            take: 10,
        })
        return stories
    },

    async getFilteredStories(searchName: string, page: number) {
        const skipAmount = (page - 1) * 10

        const stories = await client.stories.findMany({
            where: { name: { contains: searchName, mode: "insensitive" } },
            select: {
                id: true,
                name: true,
                description: true,
                views: true,
                isFinished: true,
                bannerURL: true,
                language: { select: { name: true } },
                storiesCategories: { select: { category: true } },
                storiesGenres: { select: { genre: true } },
                storiesTags: { select: { tag: true } },
                storiesWarnings: { select: { warning: true } },
                storiesUsers: {
                    select: { user: { select: { id: true, name: true } } },
                },
            },
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

    async getStoryById(storyId: number) {
        const story = await client.stories.findFirst({
            where: { id: storyId },
            select: {
                id: true,
                name: true,
                description: true,
                views: true,
                isFinished: true,
                bannerURL: true,
                language: { select: { name: true } },
                storiesCategories: { select: { category: true } },
                storiesGenres: { select: { genre: true } },
                storiesTags: { select: { tag: true } },
                storiesWarnings: { select: { warning: true } },
                storiesUsers: {
                    select: { user: { select: { id: true, name: true } } },
                },
            },
        })

        return story
    },
}
