import React from "react";
import { Box } from '@mui/material';
import getConfig from 'next/config';
import { API_URL } from "../utils/url";
import PropTypes from "prop-types";
import { parseCookies  } from 'nookies';
import { ConstructionOutlined } from "@mui/icons-material";
import assetArr from "./api/assetArr";
import Link from "next/link";
import CardDefault from "../comps/CardDefault";
import { NavbarLayout } from "../comps/NavLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withStyles } from '@mui/styles';

const styles = theme => ({
	multilineColor:{
			color:'red'
	}
});

const Dashboard=(props)=> {
	const assets=assetArr;
	console.log("dashboard_array",assets)
	return (
     <Router>
			 	<Switch>
				 <Route >
				 <main className="row product-container admin-bg">
			<NavbarLayout className="admin-nav" props={assets}  />
        {assets &&
					assets.map((post) => (
						<div className="col-md-6 col-lg-4">
						<Link href={`/${post.Slug}`} key={post.Slug}>
						<CardDefault props={post} key={post.Slug} />
			    </Link>
					 </div>
					))}			
		</main>
		</Route>
		</Switch>
		</Router>
	)
};

export default Dashboard