import UserServices from '../services/userServices.js';

const service = new UserServices();

/* Obtener todo los productos */

export const getUsers = async (req, res) => {
  const users = await service.find();
  res.json(users);
}

