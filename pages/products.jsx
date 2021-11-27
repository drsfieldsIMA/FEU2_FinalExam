
/** @format */

import Link from "next/link";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardDefault from "../comps/CardDefault";
import PropTypes from "prop-types";



const ProductStore=(props)=> {
	const assets=props.props;
	console.log("asset_array",assets)
	return (
		<main className="row product-container">
      {assets &&
					assets.map((post) => (
						<div className="col-md-6 col-lg-4">
							  <Link href={`/${post.Slug}`} key={post.Slug}>
										<CardDefault props={post} key={post.Slug} />
					    	</Link>
				    </div>
					))}
        
		</main>
	);
}

ProductStore.propTypes = {
	props: PropTypes.node,
	assets: PropTypes.node,
	post:PropTypes.arrayOf(PropTypes.string)
};


export default ProductStore;