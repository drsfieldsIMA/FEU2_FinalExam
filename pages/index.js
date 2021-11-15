/** @format */

import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/api";
import { Link } from "react-router-dom";
import CardDetail from "../components/layout/CardDetail";

export default function Home(props) {
	// the log here will happen in the browser console
	console.log(props);
	return (
		<Layout>
			<Head title="Home page" />

			<div className="container">
				<h1>Results</h1>

				{props.games.map((game) => {
					return (
						<a
							className="a_link"
							key={game.slug}
							href={`/results/${game.slug}`}
						>
							<CardDetail
								content={game.description}
								title={game.name}
								date={game.released}
								imageSrc={game.image}
								className="CardGame"
							></CardDetail>
						</a>
					);
				})}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	// in case there is an error in the API call
	// we'll send an empty array in as the prop
	let games = [];

	try {
		const response = await axios.get(
			"https://noroff.herokuapp.com/v1/old-games"
		);
		// the log here will happen on the server, you can check the console in your editor
		// console.log(response.data);
		// the array is on the response.data.results property
		games = response.data.results;
	} catch (error) {
		console.log(error);
	}

	// the props object we return here will become the props in the component
	return {
		props: {
			games: games,
		},
	};
}
