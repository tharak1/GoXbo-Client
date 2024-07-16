import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import MonumentCard from './MonumentCard';
import HotelsCard from './HotelsCard';
function Hotels() {
    let { id } = useParams();

    const [hotels,setHotels] = useState([])
    const [hotelsImg,setHotelsImg] = useState([])

    useEffect(()=>{
        const fetchMonument = async()=>{
            try{
                const response = await axios.get(`http://localhost:5000/api/monument/${id}`);
                setHotels(response.data.hotels)
                setHotelsImg(response.data.hotelsImg)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchMonument();
    },[])

    
  return (
    <div>
        <div class="grid">
            {
                hotels.map((hotel,key)=>{
                    let i=key
                    console.log(i);
                    return(<HotelsCard hotel = {hotel} hotelsImg={hotelsImg} i = {i}/>)
                })
            }
               
        </div>
    </div>
  )
}

export default Hotels
