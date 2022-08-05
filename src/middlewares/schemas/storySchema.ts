import joi from "joi"

import { createStory } from "../../services/storiesService.js"

const storySchema = joi.object<createStory>({
    name: joi.string().required(),
    description: joi.string().min(30).required(),
    bannerURL: joi.string().uri().required(),
    languageId: joi.number().required(),
})

export default storySchema
