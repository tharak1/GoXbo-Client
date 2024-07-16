import React from 'react'
import '../styles/HotelsCard.css'

function HotelsCard(props) {
	let i = props.i
  return (
    <>
      	<div class="product-card">
		<div class="product-tumb">
			<img src={props.hotelsImg[i]} alt={props.hotelsImg[i]} />
		</div>
		<div class="product-details">
			<span class="product-catagory"></span>
			<h4><a href="">{props.hotel}</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <h4>Rating : 4 Stars </h4>
			<div class="product-bottom-details">
				<div class="product-price"><small>4200.00</small>3600.00</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
    </>
  );
}

export default HotelsCard
