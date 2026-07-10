const Product = require("../models/product.model");

exports.getProducts = () => Product.findAll();

exports.getProduct = (id) =>
  Product.findById(id);

exports.createProduct = (product) =>
  Product.create(product);

exports.updateProduct = (id, product) =>
  Product.update(id, product);

exports.deleteProduct = (id) =>
  Product.remove(id);