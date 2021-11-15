/** @format */

import PropTypes from "prop-types";

function Text ({ color="white" ,size = "14", fontFamily="Fira Sans Condensed", content }) {
	return <p  style={{ color,size, fontFamily}} >{content}</p>;
}

Text.propTypes = {
	size: PropTypes.string,
  fontFamily: PropTypes.string,
  color: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default Text;