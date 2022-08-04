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
}
