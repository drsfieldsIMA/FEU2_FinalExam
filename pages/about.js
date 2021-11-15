/** @format */

import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
	return (
		<>
			<Head title="About Page" />
			<Layout>
				<div className="container" >
					<h1>About Us Page</h1>
					<p>
						ut eu sem integer vitae justo eget magna fermentum iaculis eu non
						diam phasellus vestibulum lorem sed risus ultricies tristique nulla
						aliquet enim tortor at auctor urna nunc id cursus metus aliquam
						eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
						orci a scelerisque purus semper eget
					</p>
				</div>
			</Layout>
		</>
	);
}
