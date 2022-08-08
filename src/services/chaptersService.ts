import { chapters } from "@prisma/client"

import { checkIfChapterNameIsDuplicate } from "../utils/checkIfChapterNameIsDuplicate.js"
import { checkIfStoryBelongsToUser } from "../utils/checkIfStoryBelongsToUser.js"
import { createChapter } from "../utils/createChapter.js"

import { chaptersRepository } from "../repositories/chaptersRepository.js"

export type createChapter = Omit<chapters, "id" | "createdAt" | "storyId">

export const chaptersService = {
    async createNewChapter(
        chapter: createChapter,
        userId: number,
        storyId: number
    ) {
        if (!chapter.startingNotes) chapter.startingNotes = null
        if (!chapter.endingNotes) chapter.endingNotes = null

        await checkIfStoryBelongsToUser(userId, storyId)
        await checkIfChapterNameIsDuplicate(chapter.name, storyId)
        const chapterId = await createChapter(chapter, storyId)
        return chapterId
    },

    async getAllChapters(storyId: number) {
        const chapters = await chaptersRepository.returnAllChapters(storyId)
        return chapters
    },

    async getChapterById(chapterId: number) {
        const chapter = await chaptersRepository.returnSpecificChapter(
            chapterId
        )
        return chapter
    },
}
