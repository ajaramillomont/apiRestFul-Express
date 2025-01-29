const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(35);
const description = Joi.string().min(5).max(50);
const tipo = Joi.string().min(5).max(15);

const getCategorySchema = Joi.object({
  id: id.required(),
})

const createCategorySchema = Joi.object({
  name: name.required(),
  description: description.required(),
  tipo: tipo.required()
});

const updateCategorySchema = Joi.object({
  name,
  description,
  tipo
});
