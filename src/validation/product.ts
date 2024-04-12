import Joi from 'joi';
export const ProductJoiObj = Joi.object({
    name: Joi.string().required().empty().messages({
        "any.required":"Tên không để trống",
        "string.empty":"Tên không để trống"
    }),
    image: Joi.string().required().empty().messages({
        "any.required":"Ảnh không để trống",
        "string.empty":"Ảnh không để trống"
    }),
    price: Joi.number().required().min(1000).messages({
        "any.required":"Tên không để trống",
        "number.min":"Giá không nhỏ hơn 1000"
    }),
    brand: Joi.string().required().messages({
        "any.required":"Loại hàng không để trống",
        "string.empty":"Loại hàng không để trống"
    }),
    description: Joi.string().required().messages({
        "any.required":"mô tả không để trống",
        "string.empty":"Mô tả không để trống"
    })
})