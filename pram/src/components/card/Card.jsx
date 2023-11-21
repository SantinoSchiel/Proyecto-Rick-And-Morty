import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
   return (
      <div style={{margin:20}}>
         
          <button onClick={() => props.onClose(props.id)}style={{opacity:0.5,backgroundColor:"red",marginLeft:277,marginTop:0,display:"flex",cursor:"pointer",borderStyle:"solid"}}><strong>X</strong></button>
         <img src={props.image} alt=''>
         </img>
         <Link to={`/detail/${props.id}`}>   
         <h2 style={{backgroundColor:"yellow",display:"flex",margin:0,opacity:0.6}}>{props.name}</h2>
         </Link>
         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.status}</h2> */}
         <h2 style={{backgroundColor:"gray",display:"flex",margin:0,opacity:0.8}}>{props.species}</h2>
         <h2 style={{backgroundColor:"gray",display:"flex",margin:0,opacity:0.8}}>{props.gender}</h2>
         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.origin.name}</h2> */}

         
         
      </div>
   );
}