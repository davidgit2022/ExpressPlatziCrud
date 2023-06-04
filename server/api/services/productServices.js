import { faker } from '@faker-js/faker';
import boom from '@hapi/boom'
import sequelize from '../libs/sequelize.js';

class ProductServices {
  constructor(){
    this._products = [];
    this.generate();
  };

  generate (){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this._products.push({
        "id": faker.datatype.uuid(),
        "name": faker.commerce.productName(),
        "price": parseInt(faker.commerce.price(), 10),
        "image": faker.image.imageUrl(),
        "isBlock": faker.datatype.boolean(),
      });
    }
  };

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this._products.push(newProduct);
    return newProduct;
  };

  async find(){
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
  
  };

  async findOne(id) {
    const product = this._products.find(item => item.id === id);

    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  };

  async update(id, changes){
    const index = this._products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const productUpdate = this._products[index];
    this._products[index] = {
      ...productUpdate,
      ...changes
    };
    return this._products[index];
  };

  async delete(id){
    const index = this._products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this._products.splice(index,1);
    return{ id };
  }

};


export default ProductServices;

