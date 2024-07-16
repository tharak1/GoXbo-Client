import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'
import '../styles/MonumentDetails.css'
import axios  from 'axios';
function MonumentDetails() {
    let { id } = useParams();

    const [monument,setMonument] = useState([])
    useEffect(()=>{
        const fetchMonument = async()=>{
            try{
                const response = await axios.get(`http://localhost:5000/api/monument/${id}`);
                setMonument(response.data);
            }
            catch(err){
                console.log(err);
            }
        }
        fetchMonument();

    },[])
    const openMaps = ()=>{
        window.open(
            monument.mapUrl, "_blank");
    }
  return (
    <div>
        <Navbar/>
        <div className="monumentDetails">
            <div className="image-section">
                <div className="image-holder-monument-details">
                    <img src={monument.imageUrl} alt="" />
                </div>
                
            </div>
            <div className="desc">
                <div className="monument-name">
                    <h1>{monument.name}</h1>
                </div>
                <div className="links-holder">

                    <button className='btn-desc' onClick={openMaps}>map</button>
                    <Link to={`/hotels/${monument._id}`}><button className='btn-desc'>Hotels</button></Link>
                    <Link to={`/food/${monument._id}`}><button className='btn-desc'>Food to eat</button></Link>

                </div>
                <span className='span'></span>
                <div className="info">
                    <p>{monument.shortInfo}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MonumentDetails
