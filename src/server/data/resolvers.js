const { Reviews } = require('./connectors');

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
        results.map(({ multimedia, display_title, headline, byline, summary_short }) => ({
          display_title: display_title,
          thumbnail: multimedia.src,
          headline: headline,
          byline: byline,
          summary_short: summary_short
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

module.exports = resolvers;