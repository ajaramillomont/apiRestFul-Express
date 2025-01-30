const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(5).max(30);
const lastname = Joi.string().min(5).max(30);
const address = Joi.string().min(10).max(40);
const phone = Joi.string().min(10).max(10);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(10);

const getCustomerSchema = Joi.object({
  id: id.required(),
});
const createCustomerSchema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  address: address.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required()
  })

});
const updateCustomerSchema = Joi.object({
  name,
  lastname,
  address,
  phone,
  userId,
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
