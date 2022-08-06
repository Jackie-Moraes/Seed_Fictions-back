import { client } from "../config/database.js"

export const usersStoriesRepository = {
    async getUserStories(userId: number) {
        const stories = await client.storiesUsers.findMany({
            where: { userId },
            select: {
                story: {
                    select: {
                        id: true,
                        name: true,
                        description: true,
                        views: true,
                        isFinished: true,
                        bannerURL: true,
                        language: { select: { name: true } },
                    },
                },
            },
            orderBy: { story: { createdAt: "desc" } },
        })
        return stories
    },
}
