import Joi from "joi";

const id = Joi.number().integer();
const email = Joi.string().email().messages({
    'string.base': "El campo 'email' debe ser un string",
    'string.empty': "El campo 'email' no puede ser un campo vacío",
});

const password = Joi.string().min(8). messages({
    'string.base': "El campo 'password' debe ser un string",
    'string.empty': "El campo 'password' no puede ser un campo vacío"
});
/* const role = Joi.string().min(8); */

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required()
    /* role: role.required() */
});

const updateUserSchema = Joi.object({
    email:email
    /* role: role */
});

const deleteUserSchema = Joi.object({
    id:id.required()
  })

const getUserSchema = Joi.object({
    id: id.required(),
});

export { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema};

