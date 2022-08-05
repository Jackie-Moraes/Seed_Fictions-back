import { Router } from "express"

import {
    validateStory,
    validateToken,
} from "../middlewares/validateInformation.js"
import { storiesController } from "../controllers/storiesController.js"

const storiesRouter = Router()

storiesRouter.post(
    "/stories",
    validateStory,
    validateToken,
    storiesController.createNewStory
)
storiesRouter.get("/stories", storiesController.getRecentStories)
storiesRouter.get("/stories/:searchName", storiesController.getStoriesByName)

export default storiesRouter
