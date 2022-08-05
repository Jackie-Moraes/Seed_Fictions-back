import { client } from "../config/database"

export const commentsRepository = {
    async insertNewComment(comment: string, userId: number, chapterId: number) {
        await client.comments.create({
            data: { content: comment, userId, chapterId },
        })
    },

    async getComments(chapterId: number) {
        const comments = await client.comments.findMany({
            where: { chapterId },
            include: { user: true },
            orderBy: { createdAt: "desc" },
        })
        return comments
    },
}
