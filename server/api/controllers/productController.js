import productServices from '../services/productServices.js';


const service = new productServices();
/* Obtener todo los productos */
export const getProducts = async (req, res) => {
  const products = await service.find();
  res.json(products);
};

/* Obtener un solo producto */
export const getOneProduct = async (req, res,) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

/* Crear un producto */
export const createProduct = async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);

};

/* Actualizar un producto */
export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const productUpdate = await service.update(id, body);
    res.json(productUpdate);
  } catch (error) {
    next(error);
  }
};

/* Eliminar un producto */
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const productDelete = await service.delete(id);

  res.json(productDelete);
}

