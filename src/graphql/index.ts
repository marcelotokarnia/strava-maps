import { ApolloServer } from 'apollo-server-express'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req }) => ({ req }),
})

export default apolloServer
