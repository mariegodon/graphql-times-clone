const express = require('express');
const path = require('path');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const bodyParser = require('body-parser');
const schema = require('./data/schema');

const PORT = 8080;

const graphQLServer = express();

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

graphQLServer.listen(PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${PORT}/graphiql`
  )
);