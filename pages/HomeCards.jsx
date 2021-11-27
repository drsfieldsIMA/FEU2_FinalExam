import Link from "next/link";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Image from "next/image"
import DetailCard from "../comps/DetailCard";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";
import { API_URL } from "../utils/url";
import assetArr from "./api/assetArr";
import CardDefault from "../comps/CardDefault";

const HomeDeck= ({assets}) => {
 // console.log("Home-Deck",assets)
const assetArray=[assets]
return (
<section>
<div className="container_2">
					<div className="row">
				<div className="col-md-6 col-lg-4">
				<DetailCard className="homeSkew"  title="A title goes here" 
				content="content goes here"
				date="1 may 2012"
				imageSrc="/Aida_logo.svg"/>
				</div>
				<div className="col-md-6 col-lg-4">
				<p
					className="homeSkew"
					style={{ fontFamily: "Fira Sans Condensed",paddingTop:120,paddingBottom:40 }}
				>
					It is a long established fact that a reader will be distracted by
					the readable content of a page when looking at its layout. The
				</p>
				</div>
				<div className="col-md-6 col-lg-4">
						<p
					className="homeSkew"
					style={{ fontFamily: "Fira Sans Condensed",paddingTop:120,paddingBottom:40 }}
						>
					It is a long established fact that a reader will be distracted by
					the readable content of a page when looking at its layout. The
						</p>
				</div>
			</div>
	</div> 
<div className="container">
<Carousel itemsToShow={3} style={{marginTop:50}}>
{assetArr &&
assetArr.map(
(post) => (
  (
    <>
     <Link href={`products/${post.Slug}`} key={post.Slug}>
     <a>
      <h2>{post.Title}</h2> 
    <CardDefault  props={post} key={post.Slug} />
    </a>
    </Link>
    </>
  )
)
)
}
</Carousel>
</div>
</section>
)
};

export async function getStaticPaths() {
	const res = await fetch(`http://localhost:1337/assets`);
	const assets = await res.json();
	//	console.log("posts==", assets);
	const paths = assets.map((post) =>
		//		console.log("hello slug", post.Slug),
		({
			params: { slug: post.Slug },
		})
	);

	return {
		paths,
		fallback: false,
	};
}



HomeDeck.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string),
	assetArr: PropTypes.arrayOf(PropTypes.string),
	assetArray: PropTypes.arrayOf(PropTypes.string)
};

export default HomeDeck;


