import React, { Component, Fragment } from 'react';
import {
	ApolloProvider,
} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import styled from 'styled-components';

import { PageMoviewReview } from './PageMovieReview';

const client = new ApolloClient();

const Header = styled.header`
	font-family: Old English;
	font-size: 1.5em;
	text-align: center;
	padding: 0.25em 0;
	box-shadow: 0px 5px 5px -5px rgba(100, 100, 100, 0.49);
`;

class App extends Component {
  render() {
    return (
			<ApolloProvider client={client}>
				<Fragment>
					<Header>The New York Times</Header>
					<PageMoviewReview />
				</Fragment>
			</ApolloProvider>
		);
  }
}
export default App;