/** @format */

// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
						rel="stylesheet"
					/>
					{/* <title>
						AIDA | reduce fixed costs | increase safety | reduce carbon exhausts{" "}
					</title> */}
					<meta
						name="description"
						content="Do you want to reduce fixed costs, increase safety and offset carbon exhausts for your chemical and engineering operations. Industry players estimate 50% of fixed costs for a typical plant are the result of continous maintenance work. Learn how AIDA can  predict equipment failure, improve safety, optimize labour and carbon and material management  and enhance capital budget planning. "
					/>
					<meta
						name="keywords"
						content="Predictive Maintenance, Budget planning, Calender based Maintenance, Safety, Machine Failure, Remaining Useful Life, Artificial Intelligence Fault analysis, Advance Engineering"
					/>
					<meta name="author" content="Shaun Fields" />
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
