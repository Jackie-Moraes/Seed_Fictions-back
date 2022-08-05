import { usersStoriesRepository } from "../repositories/usersStoriesRepository.js"

export const usersStoriesService = {
    async getUserStories(userId: number) {
        const stories = await usersStoriesRepository.getUserStories(userId)
        return stories
    },
}
