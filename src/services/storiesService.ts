import { stories } from "@prisma/client"

import { insertNewStory } from "../utils/insertNewStory.js"
import { insertUserToStoryCorrelation } from "../utils/insertUserToStoryCorrelation.js"

export type createStory = Omit<
    stories,
    "id" | "views" | "isFinished" | "createdAt"
>

export const storiesService = {
    async createNewStory(story: createStory, userId: number) {
        const storyInfo = await insertNewStory(story)
        const storyId = storyInfo.id

        await insertUserToStoryCorrelation(storyId, userId)
    },
}
