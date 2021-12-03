/* eslint-disable no-mixed-spaces-and-tabs */
/** @format */
import React from "react"; 
import Text from "../comps/common/Text";
import PropTypes from "prop-types";
import assetArr from "./api/assetArr";
import Image from "next/image";
import { Card,Box, Button, Container, Grid, TextField, Typography } from '@mui/material';

export default function AboutSection({asset_count}) {
	return (
		<div className="app-responsive-wrapper-outer">
			<div className="app-responsive-wrapper-inner">				
			<Box className="product-box height-75">
	<Card className="singleCard" style={{height:"75vh",marginBottom:"2em",marginTop:"1em"}}>
			<Text 	style={{ fontFamily: "Fira Sans Condensed"}}
											content="Find out the lifespan of your machine assets with just your smartphone."></Text>
										<div>
											<h2>Number of AIDA assured operational assets</h2>
															Total :{assetArr.length}
							</div>
						<div className="image-wrapper">
				 <Image className="rotate_03"  src="/turbine.svg" alt="wind turbine"
				 width={150}
				 height={350}
				 ></Image> 
				 </div>
				 <Text content="Companies, enterprises and industries need to become more effective and sustainable. Aida can provide important tool to reach that goal. 
				 By using audio recorded on your phone we can estimate the remaining useful life."></Text>
							</Card>
							</Box>
		</div>
		</div>
	);
}

export async function getStaticProps() {
//  const res=await fetch ('http://localhost:1337/assets/count')
 // console.log(res)
//  const asset_count=await res.json();
const asset_count=assetArr.length
	return {
		props:{asset_count,},
	}
}
AboutSection.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string)
};
