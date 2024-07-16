import React from 'react'

function FoodCard(props) {
    let i = props.i
  return (
    <>
    <div class="product-card">
		<div class="product-tumb">
			<img src={props.foodImg[i]} alt={props.foodImg[i]}/>
		</div>
		<div class="product-details">
			<span class="product-catagory"></span>
			<h4><a href="">{props.food}</a></h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
      <h4>Rating : 4 Stars</h4>
			<div class="product-bottom-details">
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default FoodCard
