import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbooking-gamma.vercel.app/api/graphql', // GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
