import UserServices from '../services/userServices.js';

const service = new UserServices();

/* Obtener todo los productos */
export const getUsers = async (req, res) => {
  const users = await service.find();
  res.json(users);
};

/* Obtener un solo producto */
export const getOneUser = async (req, res,) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

/* Crear un producto */
export const createUser = async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await service.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
  

};

/* Actualizar un producto */
export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const userUpdate = await service.update(id, body);
    res.json(userUpdate);
  } catch (error) {
    next(error);
  }
};

/* Eliminar un producto */
export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDelete = await service.delete(id);

    res.json(userDelete);
  } catch (error) {
    next(error);
  }
  
}

