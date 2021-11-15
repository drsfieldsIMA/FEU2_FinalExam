/** @format */

import PropTypes from "prop-types";

function Heading({ color="white" ,size = "1", content }) {
	const VariableHeading = `h${size}`;
	return <VariableHeading  style={{ color }} >{content}</VariableHeading>;
}

Heading.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default Heading;