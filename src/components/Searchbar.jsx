import React from "react";
import { useState } from "react";
import {searchPokemon} from "../api"
const Searchbar = () => {
    //Search es un dato que estara cambiando en base a
    //setSeach, esto significa que setSearch sera la funcion que se actualice constantemente 
    //Esto para poder verse reflejado en {Search}
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState('')
  
 const onchance = (event) => {
    //Obtenemos los datos del input que se encuentran en la direccion (parametro).target.value
setSearch(event.target.value);
 }
 const onclick = async (event) => {
    const data = await searchPokemon(search);
    setPokemon(data) 
    
 }
 
 
 return( 
<div className="searchbar-container">
    <div className="search-bar">
     <input type="text" name="" id="" 
     placeholder="Buscar Pokemon"
     onChange={onchance}/> 
 </div>
      <div className="search-btn">
      <button onClick={onclick} >Buscar</button>
      </div>
     </div>
    );


}


export default Searchbar;