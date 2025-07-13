const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const PORT = 5000;
const mongodb =
  "mongodb+srv://KumarUtsav:Mongodb2024@portfolio.k1m2aqm.mongodb.net/?retryWrites=true&w=majority&appName=Portfolio";

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    server.listen({ port: PORT }).then(({ url }) => {
      console.log(`Server ready at ${url}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
