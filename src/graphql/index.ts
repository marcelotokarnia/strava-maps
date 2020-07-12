import { ApolloServer } from 'apollo-server-express'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const apolloServer = new ApolloServer({
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
  resolvers,
  typeDefs,
})

export default apolloServer
