import { storiesRepository } from "../repositories/storiesRepository.js"

export async function createTag(name: string) {
    const tagInfo = storiesRepository.createTag(name)
    return tagInfo
}
