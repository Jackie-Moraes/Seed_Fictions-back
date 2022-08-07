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

    async insertStoryCategories(storyId: number, categoriesIds: number[]) {
        for (let i = 0; i < categoriesIds.length; i++) {
            const subCategoryId = categoriesIds[i]

            await client.storiesCategories.create({
                data: {
                    storyId,
                    subCategoryId,
                },
            })
        }
    },

    async insertStoryGenres(storyId: number, genresId: number[]) {
        for (let i = 0; i < genresId.length; i++) {
            const genreId = genresId[i]

            await client.storiesGenres.create({
                data: {
                    storyId,
                    genreId,
                },
            })
        }
    },

    async insertStoryWarnings(storyId: number, warningsId: number[]) {
        for (let i = 0; i < warningsId.length; i++) {
            const warningId = warningsId[i]

            await client.storiesWarnings.create({
                data: {
                    storyId,
                    warningId,
                },
            })
        }
    },

    async checkIfTagExists(name: string) {
        const tag = await client.tags.findFirst({
            where: { name },
        })

        return tag
    },

    async createTag(name: string) {
        const tag = await client.tags.create({
            data: { name },
        })

        return tag
    },

    async insertStoryTags(storyId: number, tagId: number) {
        await client.storiesTags.create({
            data: {
                storyId,
                tagId,
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
                chapters: { select: { id: true } },
                storiesCategories: { select: { subCategory: true } },
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
                chapters: { select: { id: true } },
                storiesCategories: { select: { subCategory: true } },
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
                storiesCategories: { select: { subCategory: true } },
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

    async increaseStoryViews(storyId: number) {
        await client.stories.update({
            where: { id: storyId },
            data: { views: { increment: 1 } },
        })
    },
}
