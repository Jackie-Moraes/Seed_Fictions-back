import { client } from "../config/database.js"

export const commentsRepository = {
    async insertNewComment(comment: string, userId: number, chapterId: number) {
        await client.comments.create({
            data: { content: comment, userId, chapterId },
        })
    },

    async getComments(chapterId: number) {
        const comments = await client.comments.findMany({
            where: { chapterId },
            select: {
                content: true,
                createdAt: true,
                user: { select: { id: true, name: true, pictureURL: true } },
            },
            orderBy: { createdAt: "desc" },
        })
        return comments
    },
}
