import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://travelbooking-gamma.vercel.app/graphql', // GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
