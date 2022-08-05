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
        await client.chapters.create({
            data: {
                name: chapter.name,
                content: chapter.content,
                startingNotes: chapter.startingNotes,
                endingNotes: chapter.endingNotes,
                storyId,
            },
        })
    },
}
