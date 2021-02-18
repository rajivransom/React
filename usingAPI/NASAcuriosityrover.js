import React,{useState,useEffect} from "react";
import axios from "axios";

  


export default function Fetchdata(){
  const [person,setPerson]=useState('');
  const [loading,setLoading]=useState(true);
  //use effect updates after one render
  useEffect(async() => {
   const request=await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
   const data=await request.json();
   const [item]=data.photos;
   setPerson(item);
   setLoading(false);


},[]
    );
 
  return(
    <div>
      
     {loading ?<div>"Loading....."</div>:<div><img src={person.img_src} width="500px" height="500px"></img>
     <div><strong>DATE:</strong>{person.earth_date}</div>
     <div>{person.camera.fullname}</div>
     </div>}

     
     
      
      
    
   
    </div>)
  }
