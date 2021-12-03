import PropTypes from "prop-types";
import Heading from "../../comps/common/Heading";
import Link from "next/link"
import AdminAssetsPage from "./assets";

export default function AdminPage({ children }) {
	return (
		<>

			<Heading content="Admin Page" />
			<nav className="dashboard">
			Sections: <Link href="/admin/assets"><a>Manage your assets</a></Link>
		</nav>
    <Heading size="3" content="Assets" />
		{children ? children : <p>Sorry you have no assets</p>}
		</>
	);
}

AdminPage.propTypes = {
	children: PropTypes.node,
};