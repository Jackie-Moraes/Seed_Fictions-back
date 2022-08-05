import { chaptersRepository } from "../repositories/chaptersRepository.js"

export async function checkIfChapterNameIsDuplicate(
    chapterName: string,
    storyId: number
) {
    const duplicate = await chaptersRepository.checkChapterName(
        chapterName,
        storyId
    )
    if (duplicate)
        throw {
            type: "duplicate",
            message: "Chapter name already exists in this story.",
        }
}
