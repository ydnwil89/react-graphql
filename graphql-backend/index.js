const { ApolloServer, gql } = require('apollo-server')
const { ApolloServerPluginLandingPageLocalDefault } = require('apollo-server-core')

const typeDefs = gql`
  type Song {
    title: String!
    author: String!
  }

  type Query {
    songs: [Song]!
  }
`

const songs = [
  {
    title: 'Кричи',
    author: 'Рок-привет',
  },
  {
    title: 'Город стекла',
    author: 'Пол Остер',
  },
  {
    title: 'Ass like that',
    author: 'Eminem'
  }
]

const resolvers = {
  Query: {
    songs: () => songs,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',

  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})