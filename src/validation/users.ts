import Joi from 'joi'

export const UserObj = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required":"Tên không để trống",
        "string.empty":"Tên không để trống"
    }),
    phone: Joi.number().required().empty().messages({
        "any.required":"Số điện thoại không để trống",
        "number.empty":"Số điện thoại  không để trống"
    }),
    email: Joi.string().required().empty().messages({
        "any.required":"Email khong duoc de trong",
        "email.empty":"Email không duoc de trong"
    })
})