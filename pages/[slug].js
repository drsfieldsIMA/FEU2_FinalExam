/** @format */
import React from "react";
import PropTypes from "prop-types";
//import { API_URL } from "../utils/url";

export default function productPost({ asset }) {
	return (
		<main>

			<h1>{asset.Title}</h1>
			<h2>{asset.Price.toFixed(2)}</h2>
			<p>{asset.Content}</p>
		</main>
	);
}

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:1337/assets`);
	const assets = await res.json();
	const paths = assets.map((post) =>
		({
			params: { slug: post.Slug },
		})
	);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const { slug } = params;
	const res = await fetch(`http://localhost:1337/assets?Slug=${slug}`);
	const data = await res.json();
	const asset = data[0];
	return {
		props: { asset },
	};
}

productPost.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string),
	asset:PropTypes.arrayOf(PropTypes.string),
	Title: PropTypes.string,
};
