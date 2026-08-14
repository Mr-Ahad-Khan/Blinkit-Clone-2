const Product = require("../Models/ProductModels");
const { createCrudController } = require("./crudController");

const crud = createCrudController(Product, "Product");

module.exports = {
  createProduct: crud.create,
  getAllProducts: crud.getAll,
  getProductById: crud.getById,
  updateProduct: crud.update,
  deleteProduct: crud.remove,
};
