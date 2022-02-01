const productModel = require('./product.model')

module.exports = {
  Query: {
    products: () => {
      return productModel.getAllProducts();
    },
    ProductByPrice: (_, args) => {
      return productModel.getProductByPrice(args.min, args.max);
    },
    Product: (_, args) => {
      return productModel.getProduct(args.id);
    },
  },

  Mutation: {
    NewProduct: (_, args) => {
      return productModel.newProduct(args.id, args.description, args.price);
    }
  },
};