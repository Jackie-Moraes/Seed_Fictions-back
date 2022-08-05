import { Request, Response } from "express"

import { usersStoriesService } from "../services/usersStoriesService.js"

export const usersStoriesController = {
    async getUserStories(req: Request, res: Response) {
        const userId = parseInt(req.params.userId)

        const userStories = await usersStoriesService.getUserStories(userId)
        return res.status(200).send(userStories)
    },
}
