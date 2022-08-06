import { Router } from "express"

import { qualificationsController } from "../controllers/qualificationsController.js"

const qualificationsRouter = Router()

qualificationsRouter.get(
    "/qualifications",
    qualificationsController.getQualifications
)

export default qualificationsRouter
