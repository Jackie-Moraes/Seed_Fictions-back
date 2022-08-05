import { Request, Response } from "express"

import { usersService } from "../services/usersService.js"

export const usersController = {
    async updatePicture(req: Request, res: Response) {
        const givenId = parseInt(req.params.userId)
        const { userId } = res.locals
        const { pictureURL } = req.body

        await usersService.updateProfilePicture(givenId, userId, pictureURL)
        return res.sendStatus(200)
    },

    async getUsers(req: Request, res: Response) {
        const { searchName } = req.params
        let page = parseInt(req.query.page as string)

        if (!page) {
            page = 1
        }

        const users = await usersService.getUsers(searchName, page)
        return res.status(200).send(users)
    },
}
