import React, {Component, Fragment} from 'react';
import {
  graphql,
	ApolloProvider,
} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { createHttpLink } from 'apollo-link-http';
import { RestLink } from 'apollo-link-rest';

const movieReviewsQuery = gql`
   {
     allReviews {
			 display_title
       thumbnail
     }
   }
 `;

 const MovieReviewsList = ({ data: {loading, error, allReviews }}) => {
	console.log(allReviews)
	if (loading) {
		return <p>Loading ...</p>;
	}
	if (error) {
		return <p>{error.message}</p>;
	}
	return <ul>
		{ allReviews.map( r => <li key={r.display_title}>{r.display_title}</li> ) }
	</ul>;
};

const MovieReviews = graphql(movieReviewsQuery)(MovieReviewsList);

const httpLink = createHttpLink({ uri: 'http://localhost:3001/graphql' });

const client = new ApolloClient();

class App extends Component {
  render() {
    return (
			<ApolloProvider client={client}>
      	<header>New York Times</header>
				<h1>Movie Reviews</h1>
				<h2>Our film critics on blockbusters, independents and everything in between.</h2>
				<MovieReviews />
			</ApolloProvider>
		);
  }
}
export default App;