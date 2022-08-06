import { Request, Response } from "express"

import { qualificationsService } from "../services/qualificationsService.js"

export const qualificationsController = {
    async getQualifications(req: Request, res: Response) {
        const qualifications = await qualificationsService.getQualifications()
        return res.status(200).send(qualifications)
    },
}
