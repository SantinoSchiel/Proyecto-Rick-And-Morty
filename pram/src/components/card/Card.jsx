import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function Card(props) {

   const myFavorites = useSelector(state => state.myFavorites);

   const dispatch = useDispatch();

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false)
         dispatch(removeFav(props.id));
      }
      if (isFav === false) {
         setIsFav(true)
         dispatch(addFav(props));
      }
   }

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         //console.log(props)
         //console.log(myFavorites[i])
         if (myFavorites[i].id === props.id) {
            setIsFav(true);
         }
      };
   }, [myFavorites]);
   // myFavorites.forEach((fav) => {
   //   if (fav.id === props.id) {
   //     setIsFav(true);
   //   }
   // });

   return (
      <div style={{ margin: 20 }}>
         {
            isFav ? (
               <button onClick={handleFavorite} style={{ display: "flex", backgroundColor: "transparent", borderStyle: "none" }}>❤️</button>
            ) : (
               <button onClick={handleFavorite} style={{ display: "flex", backgroundColor: "transparent", borderStyle: "none" }}>🤍</button>
            )
         }

         <button onClick={() => { props.onClose(props.id); { handleFavorite } }} style={{ opacity: 0.5, backgroundColor: "red", marginLeft: 277, marginTop: 0, display: "flex", cursor: "pointer", borderStyle: "solid" }}><strong>X</strong></button>
         <img src={props.image} alt=''>
         </img>
         <Link to={`/detail/${props.id}`}>
            <h2 style={{ backgroundColor: "yellow", display: "flex", margin: 0, opacity: 0.6 }}>{props.name}</h2>
         </Link>
         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.status}</h2> */}
         <h2 style={{ backgroundColor: "gray", display: "flex", margin: 0, opacity: 0.8 }}>{props.species}</h2>
         <h2 style={{ backgroundColor: "gray", display: "flex", margin: 0, opacity: 0.8 }}>{props.gender}</h2>
         {/* <h2 style={{backgroundColor:"gray",display:"flex",margin:0}}>{props.origin.name}</h2> */}



      </div>
   );
}