const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs, resolvers } = require('./schema');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://saurabhdangi01:test123@cluster0.bsole.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: '/api/graphql' });
}

startServer();

module.exports = app;
