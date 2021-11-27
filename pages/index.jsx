/** @format */

// import Link from "next/link";
import React  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./homePage";
import Heading from "../comps/Heading";
import Footer from "../comps/Footer";
// import SplashSection from "./splash";
import CardDefault from "../comps/CardDefault";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";
import { API_URL } from "../utils/url";
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import {NavbarLayout}  from "../comps/NavLayout";
import Nav from "../comps/Nav";
import FormLogin from "./login";
import  { AuthProvider } from "./auth/AuthContext";
import Dashboard from "./admin";
import HomeDeck from "./HomeCards";
import ProductStore from "./products";
import assetArr from "./api/assetArr";

const Index = ({...props }) => {
const assets=assetArr;
//console.log(assets);
	return (
		<>
		<HomePage/>
		<HomeDeck/>
		</>
	);
};

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

Index.propTypes = {
	assets: PropTypes.objectOf(PropTypes.string),
	assetArr: PropTypes.objectOf(PropTypes.string),
	obj:PropTypes.objectOf(PropTypes.array),
	post:PropTypes.arrayOf(PropTypes.string),
	FormLogin:PropTypes.func
};


export default Index;
