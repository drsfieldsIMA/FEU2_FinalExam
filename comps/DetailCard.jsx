/** @format */
import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

function DetailCard({...props}) {
	// console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(props.date));
	const splitString = props.date.split("T");
	const ImageSrc=props.Image;
//	console.log("Detail image",ImageSrc);
	const srcSet=!props.Image  ? "/Aida_logo.svg" :props.Image.formats.thumbnail.url ;
	return (
		
		<Card className="detailCard homeSkew" sx={{ width: 460, height:460, marginLeft:2 }}>
      <CardMedia
							component="img"
							height="140"
              src={srcSet}
							alt={props.title}
							className="mediaCard"
						/>
			<CardContent>
				<Typography variant="h3" component="text.secondary">
					{props.title}
				</Typography>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <Typography variant="body2" color="text.secondary">
					{splitString[0]}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="CardButton" size="large">Buy
				</Button>
			</CardActions>
		</Card>
	);
}

DetailCard.propTypes={
	title:PropTypes.string.isRequired,
	content:PropTypes.string,
	imageSrc:PropTypes.string,
	date:PropTypes.string,
};

export default DetailCard;