import React,{useState,useEffect} from "react";
import axios from "axios";

  


export default function Fetchdata(){
  const [person,setPerson]=useState('');
  const [loading,setLoading]=useState(true);
  //use effect updates after one render
  useEffect(async() => {
   const request=await fetch('https://api.randomuser.me/');
   const data=await request.json();
   const [item]=data.results;
   setPerson(item);
   setLoading(false);


},[]
    );
 
  return(
    <div>
      
     {loading ?<div>"Loading....."</div>:<div>{person.name.first} {person.name.last}</div>}
      
      
    
   
    </div>)
  }
