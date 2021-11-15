import axios from 'axios';
import Head from '../../components/layout/Head';
import Layout from '../../components/layout/Layout';
import { BASE_URL } from '../../constants/api';
import Image from 'next/image';
import { CardMedia } from '@mui/material';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Game({ game }) {
  console.log("game-lesson",game);
  return (
    <Layout>
      <Head title={game.name} />
      <CardMedia 
           component="img"
							height="400"
              width="400"
              src={game.image}
							alt={game.name}
							className="mediaCard"
      />
      <Typography variant="h2" color="text.secondary">
					{game.name}
				</Typography>
      <Typography variant="body2" color="text.secondary">
					{game.description}
			</Typography>

      {game.genre.map((gen) => {
        return (
        <Button key={gen} className="btn_link">{gen}</Button>
        )
        })}
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // the same API call we used in `index.js`
    // we want to get all the slugs from the array of games
    // so first we need to fetch the games
    const response = await axios.get(BASE_URL);
    // the log here will happen on the server, you can check the console in your editor
    console.log(response.data);
    // the array is on the response.data.results property
    const games = response.data.results;

    // Get the paths we want to pre-render based on the slugs in the games
    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `https://noroff.herokuapp.com/v1/old-games/${params.slug}`;

  let game = null;

  try {
    const response = await axios.get(url);
    // the value we want is on response.data here, not response.data.data
    game = response.data;
  } catch (error) {
    console.log(error);
  }

  // we are sending a prop called game in to the Game component up above
  return {
    props: { game: game },
  };
}