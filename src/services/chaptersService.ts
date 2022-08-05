import { chapters } from "@prisma/client"

import { checkIfChapterNameIsDuplicate } from "../utils/checkIfChapterNameIsDuplicate.js"
import { checkIfStoryBelongsToUser } from "../utils/checkIfStoryBelongsToUser.js"
import { createChapter } from "../utils/createChapter.js"

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
        await createChapter(chapter, storyId)
    },
}
