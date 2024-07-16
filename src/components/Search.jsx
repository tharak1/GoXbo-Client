import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MonumentCard from './MonumentCard';
function Search() {

    const [search,setSearch] = useState("");
    const [monuments,setMonument] = useState([]);



        useEffect(()=>{
            const fetchMonument = async(ant)=>{
                try{
                    const response = await axios.get(`http://localhost:5000/api/monument/getfilter?=${ant}`);
                    setMonument(response.data);     
                }
                catch(err){
                    console.log(err);
                }
            }
            fetchMonument()
        },[]);

  return (
    <div>
      <div class="holder">
        
            <input type="text" name="search" id="search" placeholder="search for monuments or state" class="search" onChange={(event)=>{setSearch(event.target.value);}}/>
            <input type="submit" value="search" class="search-btn"/>
    </div>

    <div class="grid">
            {
                monuments.filter((val)=>{
                    if(search == ""){
                        return val;
                    }
                    else if(val.state.toLowerCase().includes(search.toLocaleLowerCase()) || val.name.toLowerCase().includes(search.toLocaleLowerCase())){
                        return val;
                    }
                }).map((val,key)=>{
                    return(<MonumentCard monument = {val} key = {key}/>);                    
                })
            }
        
    </div>


    </div>
  )
}

export default Search
