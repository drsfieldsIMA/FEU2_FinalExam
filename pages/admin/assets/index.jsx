import React from 'react'
import Link from "next/link"
import Heading from '../../../comps/common/Heading'
import PropTypes from "prop-types";
import assetArr from '../../api/assetArr';

export  async function getStaticProps() {
  //const res  = await fetch(`http://localhost:1337/assets`);
  //const data = await res.json();
   const data=assetArr
console.log("assets line 26",data)
  return {
    props: { data },
  };
}

function AdminAssetsPage(data) {

  const assets=data.data
  return (
    <div>
      <Heading content="assets go here"/>
      <ul className="whiteText">
    
	{assets && assets.map((post) => (
			<a key={post.Slug} className="single-asset">	<h3 key={post.Slug}>{post.Slug}</h3> </a>
  ))} 
		</ul>
    </div>
  )



}

AdminAssetsPage.propTypes = {
  props:PropTypes.node,
	assets: PropTypes.node,
	asset:PropTypes.node,
	Title: PropTypes.string,
};

export default AdminAssetsPage
