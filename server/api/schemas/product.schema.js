import Joi from 'joi';

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15).messages({
  'string.base': "El campo 'nombre' debe ser un string",
  'string.empty': "El campo 'nombre' no puede ser un campo vacío",
  'string.min': "El campo 'nombre' debe tener una longitud mínima de {#limit}",
  'string.max': "El campo 'nombre' debe tener una longitud máxima de {#limit}"
});
const price = Joi.number().integer().min(10).messages({
  'number.base': "El campo 'precio' debe ser un número",
  'number.empty': "precio no puede ser un campo vacío",
  'number.min': "precio debe tener una longitud mínima de {#limit}"
});
const image = Joi.string().uri().messages({
  'string.base': "El campo 'image' debe ser un string",
});

export const createProductSchema = Joi.object({
  name:name.required(),
  price:price.required(),
  image:image.required()
});

export const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

export const deleteProductSchema = Joi.object({
  id:id.required()
})

export const getProductSchema = Joi.object({
  id: id.required()
});