/** @format */
import React from "react";
import PropTypes from "prop-types";
//import { API_URL } from "../utils/url";

export default function productPost({ asset }) {

	return (
		<main>

<div class="container-fluid">
      <div class="container">
    <h1><span>checkout</span></h1>
    <button class="reset" type="button">Reset</button>
    
    <main class="cart">
        <div class="cart-top row">
          <div class="col-5"></div>
        <div class="col-7">
          <div class="loader"></div>
        </div>
        </div>
        <div class="total">
        </div>
    </main>
  </div>
  </div>
		</main>
	);
}


import { getExistingFavs } from "./components/common/favFunctions.js";
import  displayMessage  from "./components/common/displayMessage.js";
import { getToken } from "./utils/storage.js";
import createMenu from "./components/common/createMenu.js"

/////////////////////////////////////////////////////////////////////////////
// 1st part of this function  renders the HTML blocks for the wishlist (favourites) array

const token = getToken();

createMenu();

export function ShoppingCart(container){

    container.innerHTML="";
const favourites = getExistingFavs();
//console.log("favourites",favourites)

const totalContainer=document.querySelector(".total");
totalContainer.innerHTML="";
// Check that the user has selected her/his favourite products
if (favourites.length === 0) {
    displayMessage("error", "No items in the cart yet", ".cart");
}


let totalprice=parseFloat(0);
favourites.forEach(function(favourite) {
    const image_url = !favourite.image_url ? "dummy_car.svg" : favourite.image_url;
//    const quantityValue  = !favourite.quantity ? 1 : favourite.quantity;
const quantityValue  = parseFloat(1);
    if (favourites.length > 0) {
        totalprice+= parseFloat(favourite.price);
    
        return (
    productContainer.innerHTML += `<div class="checkout-items col-md-6 col-lg-4">
                                  <div class="card" style="min-height:250px;">
                                    <div class="cart-images embed-responsive-4by3 m-left" alt="${favourite.title}" style="background-image: url(./public/uploads/${image_url}); background-size: cover;"></div>
                                    <h2 class="m-auto">${favourite.title}</h2>
                                    <p class="price m-auto">${quantityValue} x ${favourite.price}</p>
                                         <a href="detail.html?$ID=${favourite.id}" class="m-auto btn btn-primary">Details</a>
                                         </div>
                                         </div>
                                   </div>`;
                                }

totalContainer.innerHTML+= `<div class="col-sm-6 col-md-6 col-lg-4">
                                <div class="cart-box">
                                <div class="total">Total Basket=${totalprice}</div>
                                </div>
                              </div>`;
}

});
// After clicking reset (back to the starting array) re-do the HTML rendering from the beginning 
document.querySelector(".reset").addEventListener("click", (event) => { localStorage.clear();});
document.querySelector(".reset").addEventListener("click", (event) => {ShoppingCart(productContainer); });
// After clicking reset clear the local storage
// User Button to replace the icons <i class="heart"></i>
//<button class="${CSSclass} btn-primary" type="button" id="${favourite.id}">Add</button>




