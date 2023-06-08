import sequelize from '../libs/sequelize.js';
import boom from '@hapi/boom';

class UserServices {
  constructor() { };

  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  };

  async find() {
    const rta = await sequelize.models.User.findAll();
    return rta;
  };

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  };

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  };

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy()
    return { id };
  };
};

export default UserServices;




