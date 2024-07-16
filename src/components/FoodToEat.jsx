import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import HotelsCard from './HotelsCard';
import FoodCard from './FoodCard';

function FoodToEat() {
    let { id } = useParams();

    const [foods,setFood] = useState([]);
    const [foodImg,setFoodImg] = useState([]);

    useEffect(()=>{
        const fetchMonument = async()=>{
            try{
                const response = await axios.get(`http://localhost:5000/api/monument/${id}`);
                setFood(response.data.foodToEat);
                setFoodImg(response.data.foodImg);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchMonument();

    },[])
  return (
    <div>
      <div>
        <div class="grid">
            {
                foods.map((food,key)=>{
                    let i=key
                    console.log(i);
                    return(<FoodCard food = {food} foodImg={foodImg} i = {i}/>)
                })
            }
               
        </div>
    </div>
    </div>
  )
}

export default FoodToEat
