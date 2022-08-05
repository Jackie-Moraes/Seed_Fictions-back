import { Request, Response } from "express"

import { commentsService } from "../services/commentsService.js"

export const commentsController = {
    async createNewComment(req: Request, res: Response) {
        const { userId } = res.locals
        const { comment } = req.body
        const chapterId = parseInt(req.params.chapterId)

        await commentsService.insertComment(comment, userId, chapterId)
        return res.sendStatus(201)
    },

    async getChapterComments(req: Request, res: Response) {
        const chapterId = parseInt(req.params.chapterId)

        const comments = await commentsService.getComments(chapterId)
        return res.status(200).send(comments)
    },
}
