import { client } from "../config/database.js"
import { createChapter } from "../services/chaptersService.js"

export const chaptersRepository = {
    async checkChapterName(chapterName: string, storyId: number) {
        const exists = await client.chapters.findFirst({
            where: { name: chapterName, storyId },
        })
        if (!exists) return null
        return exists
    },

    async checkStoryOwner(userId: number, storyId: number) {
        const exists = await client.storiesUsers.findFirst({
            where: { userId, storyId },
        })
        return exists
    },

    async createChapter(chapter: createChapter, storyId: number) {
        const chapterInfo = await client.chapters.create({
            data: {
                name: chapter.name,
                content: chapter.content,
                startingNotes: chapter.startingNotes,
                endingNotes: chapter.endingNotes,
                storyId,
            },
        })
        return chapterInfo.id
    },

    async returnAllChapters(storyId: number) {
        const chapters = await client.chapters.findMany({
            where: { storyId },
            select: { id: true, name: true, createdAt: true },
        })

        return chapters
    },

    async returnSpecificChapter(chapterId: number) {
        const chapter = await client.chapters.findFirst({
            where: { id: chapterId },
            select: {
                id: true,
                name: true,
                content: true,
                startingNotes: true,
                endingNotes: true,
                comments: {
                    select: {
                        id: true,
                        content: true,
                        createdAt: true,
                        user: {
                            select: { id: true, name: true, pictureURL: true },
                        },
                    },
                },
            },
        })

        return chapter
    },
}
