/** @format */

import Link from "next/link";

export default function Layout({ children }) {
	return (
		<>
			<nav>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">About Us</Link>
				<Link href="/results">Results</Link>
			</nav>

			<div className="container">{children}</div>
		</>
	);
}
