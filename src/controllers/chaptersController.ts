import { Request, Response } from "express"

import { chaptersService } from "../services/chaptersService.js"

export const chaptersController = {
    async createNewChapter(req: Request, res: Response) {
        const { userId } = res.locals
        const storyId = parseInt(req.params.storyId)

        const chapterId = await chaptersService.createNewChapter(
            req.body,
            userId,
            storyId
        )
        return res.status(201).send({ chapterId })
    },

    async getAllChapters(req: Request, res: Response) {
        const storyId = parseInt(req.params.storyId)

        const chapters = await chaptersService.getAllChapters(storyId)
        return res.status(200).send(chapters)
    },

    async getSpecificChapter(req: Request, res: Response) {
        const chapterId = parseInt(req.params.chapterId)

        const chapter = await chaptersService.getChapterById(chapterId)
        return res.status(200).send(chapter)
    },
}
