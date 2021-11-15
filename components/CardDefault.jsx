/** @format */

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";

import PropTypes from 'prop-types';

function CardDefault({props}) {
	const base_url="http://localhost:1339/uploads/small_Planetary_gear_bf138a8400.png"
	const ImageSrc=props.Image
	const foo = props.Image.formats.small ?? ImageSrc
	const srcSet="http://localhost:1339"+foo.url

//	console.log("ImageURL=", foo.url)
	return (
		<>
		<Card className="detailCard" sx={{ width: 310, height:400, marginLeft:0 }}>
			<CardContent>
			<div className="img-responsive img-thumbnail ratio-4-3" style={{backgroundImage:`url(${srcSet})`}}></div>
			<Typography variant="body2" color="text.primary" style={{ fontSize: 28, fontWeight: 'bold'}}>
          {props.Title}
				</Typography>
			  <Typography variant="body2" color="text.secondary">
          {props.Price.toFixed(2)}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="CardButton" size="large">
				 Buy
				</Button>
			</CardActions>
		</Card>
		</>
	);
}

CardDefault.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string,
	imageSrc:PropTypes.string,
	date:PropTypes.string,
}

export default CardDefault;