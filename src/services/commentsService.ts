import { commentsRepository } from "../repositories/commentsRepository.js"

export const commentsService = {
    async insertComment(comment: string, userId: number, chapterId: number) {
        await commentsRepository.insertNewComment(comment, userId, chapterId)
    },
}
