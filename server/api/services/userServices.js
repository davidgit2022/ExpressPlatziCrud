import sequelize from '../libs/sequelize.js';

class UserServices {
  constructor(){};

  async create(data){
    return data;
  };

  async find(){
    const rta = await sequelize.models.User.findAll();
    return rta; 
  };

  async findOne(id){
    return {id};
  };
};

export default UserServices;




