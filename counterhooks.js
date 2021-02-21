import React,{useState,useEffect} from "react";
import axios from "axios";

  

export default function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div>
            Count:{count}
            <button onClick={()=>setCount(count+1)}>Tap me</button>
        </div>
    )
}
