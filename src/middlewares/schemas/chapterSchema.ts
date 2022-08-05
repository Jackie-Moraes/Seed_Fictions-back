import joi from "joi"

import { createChapter } from "../../services/chaptersService.js"

const chapterSchema = joi.object<createChapter>({
    name: joi.string().required(),
    content: joi.string().required(),
    startingNotes: joi.string(),
    endingNotes: joi.number(),
})

export default chapterSchema
