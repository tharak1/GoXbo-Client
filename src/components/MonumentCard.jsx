import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/MonumentCard.css'
function MonumentCard(props) {

    const url = `url(${props.monument.imageUrl}) `;
    let finalimageurl = url + 'no-repeat center/cover'
    const image1 = ()=>({
        background:finalimageurl 
    });
    //{`/recipePage/${props.recipe._id}`}
  return (
    <>
        <Link to={`/recipePage/${props.monument._id}`}>
        <div class="property-card js-property-card" style={image1()}>
            <div class="property-image" >
              <div class="property-image-title">
              <h5> {props.monument.name} </h5>
              </div>
            </div>
          <div class="property-description">
          <h5> {props.monument.name} </h5>
            <p>{props.monument.shortInfo}</p>
          </div>
        </div>
        </Link>
    </>
  )
}

export default MonumentCard
