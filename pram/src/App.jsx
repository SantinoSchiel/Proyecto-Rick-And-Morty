import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav/Nav.jsx";
import axios from "axios";
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/about/about.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Error from "./components/error/Error.jsx";

function App() {

   const [characters, setCharacters] = useState([]);

   const location = useLocation();

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const email = "ruso@gmail.com";
   const password = "123";

   function login(userData) {
      if (email === userData.email && password === userData.password) {
         setAccess(true);
         navigate("/home");
      }
      else {
         alert("Credenciales incorrectas!")
      }
   }

   function logout() {
      setAccess(false)
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      const charId = characters.filter(char => char.id === Number(id))
      if (charId.length) {
         return alert(`${charId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      );
   }

   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         {location.pathname === '/' ? null : <Nav onSearch={onSearch} logout={logout} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;