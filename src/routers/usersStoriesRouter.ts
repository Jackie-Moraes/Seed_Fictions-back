import { Router } from "express"

import { usersStoriesController } from "../controllers/usersStoriesController.js"

const usersStoriesRouter = Router()

usersStoriesRouter.get(
    "/stories/users/:userId",
    usersStoriesController.getUserStories
)

export default usersStoriesRouter
