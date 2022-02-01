const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.12,
  },
  {
    id: "bluejean",
    description: "Blue Jean",
    price: 55.55,
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

function getProductByID(id){
  products.filter( product => { 
    return product.id === id 
  });
}

module.exports = {
    getAllProducts,
    getProductByPrice,
    getProductByID
}