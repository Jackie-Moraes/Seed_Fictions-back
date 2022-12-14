import { Request, Response } from "express"

import { storiesService } from "../services/storiesService.js"

export const storiesController = {
    async createNewStory(req: Request, res: Response) {
        const { userId } = res.locals

        const storyId = await storiesService.createNewStory(req.body, userId)
        return res.status(201).send({ storyId })
    },

    async getRecentStories(req: Request, res: Response) {
        let page = parseInt(req.query.page as string)

        if (!page) {
            page = 1
        }

        const stories = await storiesService.getRecentStories(page)
        return res.status(200).send(stories)
    },

    async getStoriesByName(req: Request, res: Response) {
        const { searchName } = req.params
        let page = parseInt(req.query.page as string)

        if (!page) {
            page = 1
        }

        const stories = await storiesService.getStoriesByName(searchName, page)
        return res.status(200).send(stories)
    },

    async getSpecificStory(req: Request, res: Response) {
        const storyId = parseInt(req.params.storyId)

        const story = await storiesService.getStoryById(storyId)
        return res.status(200).send(story)
    },

    async updateStory(req: Request, res: Response) {
        const storyId = parseInt(req.params.storyId)

        await storiesService.updateStory(storyId, req.body.value)
        return res.sendStatus(200)
    },
}
