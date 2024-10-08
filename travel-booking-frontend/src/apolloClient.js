import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbookingbackend-j6o4.onrender.com/api/graphql', // GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
