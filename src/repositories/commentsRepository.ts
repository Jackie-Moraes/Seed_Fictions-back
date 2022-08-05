import { client } from "../config/database"

export const commentsRepository = {
    async insertNewComment(comment: string, userId: number, chapterId: number) {
        await client.comments.create({
            data: { content: comment, userId, chapterId },
        })
    },
}
