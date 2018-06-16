import express from 'express';
import path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './data/schema';

import webpack from 'webpack';
import config from './webpack.config';
import WebpackDevServer from 'webpack-dev-server';

const PORT = 3000;

const graphQLServer = express();

const compiler = webpack(config);
const DIST_DIR = config.output.publicPath;

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
graphQLServer.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
graphQLServer.use(require('webpack-hot-middleware')(compiler));

graphQLServer.listen(PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${PORT}/graphiql`
  )
);