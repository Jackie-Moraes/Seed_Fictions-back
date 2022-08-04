import joi from "joi"

const pictureSchema = joi.object({
    pictureURL: joi.string().uri().required(),
})

export default pictureSchema
