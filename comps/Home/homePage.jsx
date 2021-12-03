/** @format */
import React from "react";
import Image from "next/image";
import SplashSection from "./splash";
// import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import PropTypes from "prop-types";

const HomePage = () => {
	return (
	<div>
		<div className="row height-75">
			<div className="col-md-6 col-lg-5 align-m justify-c">
				<div
					className="wrapper-image"
           >
					<Image
						src="/Aida_logo.svg"
						alt="Picture of Aida"
						layout="responsive"
						className="splash-image"
						width={150}
						height={150}
					/>
					</div>
				<SplashSection />
				
				</div>
				<div className="col-md-6 col-lg-7 ">
					<div className="wrapper-image-secondary">
						<Image
							src="/mob_splash.svg"
							alt="Picture of what Aida does"
							width={500}
							height={750}
						/>
					</div>
				</div>
		</div>
	</div>
);
};

HomePage.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string)
};

export default HomePage;
