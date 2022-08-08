import { createChapter } from "../services/chaptersService.js"
import { chaptersRepository } from "../repositories/chaptersRepository.js"

export async function createChapter(chapter: createChapter, storyId: number) {
    const chapterId = await chaptersRepository.createChapter(chapter, storyId)
    return chapterId
}
