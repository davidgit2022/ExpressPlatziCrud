import { Model, DataTypes, Sequelize } from "sequelize";

const USER_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true
  },

  price: {
    allowNull: false,
    type: DataTypes.FLOAT
  },

  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  isBlock: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'is_block',
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
};

class Product extends Model {
  static asocciate (){

  };

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  };
};

export {USER_TABLE, ProductSchema, User};