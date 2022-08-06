import { storiesRepository } from "../repositories/storiesRepository.js"

export async function insertGenresToStory(storyId: number, genresId: number[]) {
    await storiesRepository.insertStoryGenres(storyId, genresId)
}
