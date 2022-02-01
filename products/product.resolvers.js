const productModel = require('./product.model')

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    ProductByPrice: (_, args) => {
      return productModel.getProductByPrice(args.min, args.max);
    },
    ProductByID: (_, args) => {
      return productModel.getProductByID(args.id);
    },
  },
};