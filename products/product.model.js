const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
    review: []
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
    review: []
  },
];

function getAllProducts(){
    return products;
}

function getProductByPrice(min, max){
  return products.filter( product => {
    return product.price >= min && product.price <= max;
  });
}

function getProduct(id) {
  return products.find( product => {
    return product.id === String(id)
  });
}

function newProduct(id, description, price){
  const product = {
    id,
    description,
    price,
    reviews : []
  }
  products.push(product)
  return product;
}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProduct,
    newProduct
}