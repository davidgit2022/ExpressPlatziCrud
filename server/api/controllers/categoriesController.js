import categoriesServices from "../services/categoriesServices.js";

const service = new categoriesServices();

export const getCategories = async (req, res) => {
    const categories = await service.find();
    res.json(categories);
}

export const createCategory = async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
}