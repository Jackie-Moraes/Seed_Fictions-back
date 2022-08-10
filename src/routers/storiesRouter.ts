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
storiesRouter.get("/stories/:storyId", storiesController.getSpecificStory)
storiesRouter.get(
    "/search/stories/:searchName",
    storiesController.getStoriesByName
)
storiesRouter.put("/stories/:storyId", validateToken)

export default storiesRouter
