import { createChapter } from "../services/chaptersService.js"
import { chaptersRepository } from "../repositories/chaptersRepository.js"

export async function createChapter(chapter: createChapter, storyId: number) {
    await chaptersRepository.createChapter(chapter, storyId)
}
