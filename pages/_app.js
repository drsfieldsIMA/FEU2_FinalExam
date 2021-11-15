/** @format */

import "../styles/globals.scss";
import { AppProps } from "next/app";
import Head from "next/Head";

function App({ Component, pageProps }) {
	<Head>
		<meta
			name="viewport"
			content="minimum-scale=1, initial-scale=1, width=device-width"
		/>
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		></link>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
			integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
			crossorigin="anonymous"
		></script>
		<link rel="stylesheet" href="https://use.typekit.net/jmo3enq.css"></link>
	</Head>;
	return (
		<>{typeof window === "undefined" ? null : <Component {...pageProps} />}</>
	);
}

export default App;
