const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(10).max(35);
const price = Joi.number().positive().precision(2);
const description = Joi.string().min(10);
const image = Joi.string().uri();
const categoryId = Joi.number().integer();

const limit = Joi.number.integer();
const offset = Joi.number.integer();

const price_min = Joi.number().positive().precision(2);
const price_max = Joi.number().positive().precision(2);

const getProductSchema = Joi.object({
  id: id.required()
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  image: image.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  description,
  image,
  categoryId
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.number().positive().precision(2),
    then: Joi.required()
  })
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema, queryProductSchema }
