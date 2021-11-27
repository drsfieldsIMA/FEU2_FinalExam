/** @format */
import React from "react"; 
import Link from "next/link";
import Text from "../comps/Text";
import CardDefault from "../comps/CardDefault";
import Carousel from "react-elastic-carousel";
import PropTypes from "prop-types";

export default function AboutSection({assets}) {
	return (
		<div className="app-responsive-wrapper-outer">
      <div className="app-responsive-wrapper-inner">'
      <Text 	style={{ fontFamily: "Fira Sans Condensed" }}
         content="Find out the lifespan of your machine assets with just your smartphone."></Text>
         {/* <img class="rotate_03"  src="/turbine.svg" alt="wind turbine"></img> */}
						<Carousel itemsToShow={3}>
				{assets &&
					assets.map((post) => (
						<CardDefault props={post} key={post.Slug}/>
					))}
			</Carousel>
		</div>
    </div>
	);
}

AboutSection.propTypes = {
	assets: PropTypes.arrayOf(PropTypes.string)
};
