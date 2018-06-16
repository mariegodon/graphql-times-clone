import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  allReviews: [Review]
}
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
type Review {
  display_title: String
  mpaa_rating: String
  critics_pick: Int
  byline: String
  headline: String
  summary_short: String
  publication_date: String
  opening_date: String
  thumbnail: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;