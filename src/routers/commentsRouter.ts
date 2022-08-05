import { Router } from "express"

import {
    validateComment,
    validateToken,
} from "../middlewares/validateInformation.js"
import { commentsController } from "../controllers/commentsController.js"

const commentsRouter = Router()

commentsRouter.post(
    "/comments/:chapterId",
    validateComment,
    validateToken,
    commentsController.createNewComment
)
commentsRouter.get(
    "/comments/:chapterId",
    commentsController.getChapterComments
)

export default commentsRouter
