import { Request, Response } from "express"

import { chaptersService } from "../services/chaptersService.js"

export const chaptersController = {
    async createNewChapter(req: Request, res: Response) {
        const { userId } = res.locals
        const storyId = parseInt(req.params.storyId)

        await chaptersService.createNewChapter(req.body, userId, storyId)
        return res.sendStatus(201)
    },
}
