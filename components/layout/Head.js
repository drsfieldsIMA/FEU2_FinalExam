import NextHead from "next/head";

export default function Head(props) {
	return (
		<NextHead>
        <title>{props.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="icon" href="/favicon.ico" />
		</NextHead>
	);
}