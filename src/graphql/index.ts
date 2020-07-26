import { ApolloServer } from 'apollo-server-express'
import resolvers from 'graphql/resolvers'
import typeDefs from 'graphql/typeDefs'

const apolloServer = new ApolloServer({
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
})

export default apolloServer
