/** @format */

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from 'next/image';


function DetailCard(props) {
	return (
    <>
    {/* <Image alt="Vercel logo" src={vercel} width={1000} height={1000} /> */}

		<Card className="detailCard" sx={{ width: 560, height:560, marginLeft:32 }}>
      <CardMedia
							component="img"
							height="200"
              src={props.imageSrc}
							alt={props.title}
							className="mediaCard"
						/>
			<CardContent>
				<Typography variant="h2" component="text.secondary" sx={{ fontSize: 28 }}>
					{props.title}
				</Typography>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <Typography variant="body2" color="text.secondary">
					{props.date}
				</Typography>
			</CardContent>
			<CardActions>
				<Button className="btn_link" size="small">
				 Buy
				</Button>
			</CardActions>
		</Card>
    </>
	);
}

export default DetailCard;