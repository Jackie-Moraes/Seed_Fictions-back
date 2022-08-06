import joi from "joi"

import { createStory } from "../../services/storiesService.js"

const storySchema = joi.object<createStory>({
    name: joi.string().required(),
    description: joi.string().min(30).required(),
    bannerURL: joi.string().uri().required(),
    languageId: joi.number().required(),
    categoriesId: joi.array().items(joi.number()).required(),
    warningsId: joi.array().items(joi.number()),
    genresId: joi.array().items(joi.number()).required(),
    tags: joi.array().items(joi.string()),
})

export default storySchema
