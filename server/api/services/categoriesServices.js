import getConnection from '../libs/postgres.js';
import { faker } from '@faker-js/faker';

class categoriesServices {
  constructor() {
    this._categories = [];
    this.generate();
  };

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this._categories.push({
        "id": faker.datatype.uuid(),
        "name": faker.name.firstName(),
        "image": faker.image.imageUrl()
      });
    }
  };

  async create(data){
    const newCategory = {
      id: faker.datatype.uuid(),
      ... data
    };
    this._categories.push(newCategory);
    return newCategory;
  }

  async find(){
    /* return this._categories; */
  };
}

export default categoriesServices;