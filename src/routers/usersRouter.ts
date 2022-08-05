import { Router } from "express"

import {
    validateToken,
    validatePicture,
} from "../middlewares/validateInformation.js"
import { usersController } from "../controllers/usersController.js"

const usersRouter = Router()

usersRouter.put(
    "/profile/:userId",
    validatePicture,
    validateToken,
    usersController.updatePicture
)
usersRouter.get("/users/:searchName", usersController.getUsers)

export default usersRouter
