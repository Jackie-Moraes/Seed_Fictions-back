import { client } from "../config/database.js"

export const usersStoriesRepository = {
    async getUserStories(userId: number) {
        const stories = await client.storiesUsers.findFirst({
            where: { userId },
            include: { story: true, user: true },
            orderBy: { story: { createdAt: "desc" } },
        })
        return stories
    },
}
