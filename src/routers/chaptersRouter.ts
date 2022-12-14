import { Router } from "express"

import { chaptersController } from "../controllers/chaptersController.js"
import {
    validateChapter,
    validateToken,
} from "../middlewares/validateInformation.js"

const chaptersRouter = Router()

chaptersRouter.post(
    "/chapters/:storyId",
    validateChapter,
    validateToken,
    chaptersController.createNewChapter
)
chaptersRouter.get("/chapters/:storyId", chaptersController.getAllChapters)
chaptersRouter.get("/chapter/:chapterId", chaptersController.getSpecificChapter)

export default chaptersRouter
