import { Request, Response } from "express"

import { storiesService } from "../services/storiesService.js"

export const storiesController = {
    async createNewStory(req: Request, res: Response) {
        const { userId } = res.locals

        await storiesService.createNewStory(req.body, userId)
        return res.sendStatus(201)
    },

    async getRecentStories(req: Request, res: Response) {
        let page = parseInt(req.query.page as string)

        if (!page) {
            page = 1
        }

        const stories = await storiesService.getRecentStories(page)

        return res.status(200).send(stories)
    },
}
