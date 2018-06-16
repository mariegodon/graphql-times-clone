import { Reviews } from './connectors';

const resolvers = {
  Query: {
    author(root, args) {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    },
    allAuthors() {
      return [{ id: 1, firstName: 'Hello', lastName: 'World' }];
    },
    allReviews() {
      return Reviews.getAll().then(results => (
        results.map(({ multimedia, ...rest }) => ({
          ...rest,
          thumbnail: multimedia.src
        }))
      ))
    }
  }, 
  Author: {
    posts(author) {
      return [
        { id: 1, title: 'A post', text: 'Some text', views: 2 },
        { id: 2, title: 'Another post', text: 'Some other text', views: 200 }
      ];
    }
  },
  Post: {
    author(post) {
      return { id: 1, firstName: 'Hello', lastName: 'World' };
    }
  },
};

export default resolvers;