import { commentsRepository } from "../repositories/commentsRepository.js"

export const commentsService = {
    async insertComment(comment: string, userId: number, chapterId: number) {
        await commentsRepository.insertNewComment(comment, userId, chapterId)
    },

    async getComments(chapterId: number) {
        const comments = await commentsRepository.getComments(chapterId)

        return comments
    },
}
