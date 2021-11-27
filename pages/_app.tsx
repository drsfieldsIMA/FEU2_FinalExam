import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import Layout from '../comps/Layout'
import { createMemoryHistory } from 'history';
import CardDefault from "../comps/CardDefault";
import PropTypes from "prop-types";
import Heading from "../comps/Heading";
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import {NavbarLayout}  from "../comps/NavLayout";
import Nav from "../comps/Nav";
import FormLogin from "./login";
import Footer from '../comps/Footer';
import  { AuthProvider } from "./auth/AuthContext";
import Dashboard from "./admin";
import HomeDeck from "./HomeCards";
import ProductStore from "./products";
import HomePage from "./homePage"
import assetArr from "./api/assetArr";
import "../styles/globals.scss";
import Index from "./index"

export default function App({ Component, pageProps,props }) {
	const history = createMemoryHistory();
	const assets=assetArr;
  return (
		<div className="app-wrapper">
    <Router  history={history}>
      <Layout>
        <Switch>
					<Route path="/"  exact >
					<Index/>
					</Route>
					<Route path="/products" exact>
					<Heading content="Products" />
			     <ProductStore props={assets}/>
					</Route>
					<Route path="/login">
					<FormLogin/>
					</Route>
					<Route path="/about">
					<Heading content="About" />
					</Route>
					<Route path="/admin">
					<Heading content="Admin" />
					<Dashboard props={assets}/>
					</Route>
					<Route path="/admin/products" exact>
						</Route>
						<Route path="/admin/products/add">
						</Route>
        </Switch>
				</Layout>
    </Router>
		</div>
  );
}

export async function getStaticProps() {
	// get assets from our api
//	console.log("URL",API_URL+ "/assets")
//	const res = await fetch(API_URL+ "/products"); 
	//const assets = await res.json();
	const assets=assetArr;
	return {
		props: { assets },
	};
} 