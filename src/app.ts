import express from "express"
import "express-async-errors"
import cors from "cors"
import dotenv from "dotenv"

import handleErrors from "./middlewares/errorHandlerMiddleware.js"

import testsRouter from "./routers/testsRouter.js"

import authRouter from "./routers/authRouter.js"
import usersRouter from "./routers/usersRouter.js"
import storiesRouter from "./routers/storiesRouter.js"
import chaptersRouter from "./routers/chaptersRouter.js"
import usersStoriesRouter from "./routers/usersStoriesRouter.js"
import commentsRouter from "./routers/commentsRouter.js"
import qualificationsRouter from "./routers/qualificationsRouter.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

// Routers
app.use(authRouter)
app.use(usersRouter)
app.use(storiesRouter)
app.use(chaptersRouter)
app.use(usersStoriesRouter)
app.use(commentsRouter)
app.use(qualificationsRouter)

// Test Router
if (process.env.NODE_ENV === "test") {
    app.use(testsRouter)
}

// Error Handler
app.use(handleErrors)

export default app
