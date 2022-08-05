import { Request, Response } from "express"
import { storiesService } from "../services/storiesService"

export const storiesController = {
    async createNewStory(req: Request, res: Response) {
        const { userId } = res.locals

        await storiesService.createNewStory(req.body, userId)
        return res.sendStatus(201)
    },
}
