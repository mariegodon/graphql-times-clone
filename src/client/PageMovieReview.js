import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

const movieReviewsQuery = gql`
   {
     allReviews {
			 display_title
			 thumbnail
			 summary_short
     }
   }
 `;

const StrippedList = styled.ul`
	padding: 0 10vw;
`

const ReviewItem = styled.li`
	border-top: 1px solid #ccc;
	padding: 2em 15vw;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	& > div {
		margin-right: 2em;
		display: flex;
		flex-direction: column;
		justify-content: center;

		& > div:first-child {
			font-weight: bold;
			font-size: 1.25em;
		}

		& > div:last-child {
			margin-top: 0.75em;
		}
	}

	&:last-child {
		border-bottom: 1px solid #ccc;
	}

	&:first-child {
		border-top: none;
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
	return (
		<StrippedList>
			{ allReviews.map((r, index) =>
				<ReviewItem key={index}>
					<div>
						<div>{r.display_title}</div>
						<div>{r.summary_short}</div>
					</div>
					<img src={r.thumbnail} />
				</ReviewItem>
			)}
		</StrippedList>	
	)
};

const MovieReviews = graphql(movieReviewsQuery)(MovieReviewsList);

const PageHeader = styled.div`
	padding: 2em;
	border-bottom: 2px solid black;
`;

const PreTitle = styled.span`
	text-transform: uppercase;
	font-weight: 600;
`;

const Title = styled.h1`
	font-size: 2em;
`;

const SubTitle = styled.h2`
	font-size: 1em;
	font-weight: normal;
	color: #9a9a9a;
`;

const PageMoviewReview = () => (
  <Fragment>
		<PageHeader>
				<PreTitle>Movies</PreTitle>
				<Title>Movie Reviews</Title>
				<SubTitle>Our film critics on blockbusters, independents and everything in between.</SubTitle>
		</PageHeader>
		<MovieReviews />
	</Fragment>
);

export { PageMoviewReview };