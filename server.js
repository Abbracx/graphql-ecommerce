const express = require('express');
const path = require('path');
//help us build a schema using graphql schema language
// const { buildSchema } = require('graphql');

//replace buildSchema, use for production scale apps instead of build Schema
const { makeExecutableSchema } = require('@graphql-tools/schema')

const { loadFilesSync } = require('@graphql-tools/load-files');

//used to allow express respond to graphql queries
// graphHTTP: express middleware function which responds to graphql Queries
const { graphqlHTTP } = require('express-graphql');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));

// 
const resolvers = {
  Query: {
    products: async (parent, args, context, info) => {
      console.log('Getting Products...')
      const product = await Promise.resolve(parent.products);
      return product;
    },
    orders: ( parent, args, context, info ) => {
      console.log('Getting Orders...')
      return parent.orders
    },
  },
};

// takes in typeDefs and an array of schema strings
// typeDefs is just how graphql-tools calls schemas
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray
});

// graphql schema.. 
//Note: 'type Query' is the entry point
// 'description: String!' : description which is required 
// const schema = buildSchema(`
//     type Query{
//         products:[Product]
//         orders: [Order]
//     }

//     type Product {
//         id: ID!
//         description: String!
//         price: Float!
//         reviews: [Review]
//     }

//     type Review{
//         rating: Int!
//         comment: String
//     }

//     type Order {
//         date: String!
//         subtotal: Float!
//         items: [OrderItem]
//     }

//     type OrderItem {
//         product: Product!
//         quantity: Int!
//     }
// `);

// const root = {
//   products: require("./products/product.model"),
//   orders: require("./orders/order.model"),
// };
const app = express() 

app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: root,
    graphiql: true
}))



const PORT = process.env.PORT || 3002
app.listen(PORT, () =>{
    console.log(`GraphQL running on port ${PORT}`)
})


//Points to Note
// 1. Every large scale graphql server has two main components, the schemas and the resolvers.
// 2. 