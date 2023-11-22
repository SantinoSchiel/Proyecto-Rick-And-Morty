import React, { useState } from "react";


export default function SearchBar(props) {
   const [id,setId] = useState("")

   const handleChange = event => {
      const {value} = event.target
      setId(value)
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }



   return (
      <div style={{alignItems:"center",backgroundColor:"gray",borderStyle:"none"}}>
         
         <input value={id} onChange={handleChange} type='search' placeholder="id..." style={{borderRadius:6,padding:7,display:"flex",marginLeft:235}}/>
         <button onClick={handleClick} style={{backgroundColor:"yellow",borderRadius:7,padding:7,display:"flex",marginLeft:300,borderBlockStyle:"solid",cursor:"pointer"}}>Agregar</button>
         <button style={{backgroundColor:"yellow",borderRadius:7,padding:7,borderBlockStyle:"solid",cursor:"pointer",marginBottom:10}} className="random-button" onClick={() => props.onSearch(Math.ceil(Math.random() * 826))}><strong>Add random</strong></button>
      </div>
   );
}