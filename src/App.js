import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/pokedex";
import { getPokemons, getPokemonData } from "./api";
import Pokemon from "./components/pokemon";
const { useState, useEffect } = React;

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(true);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(27, 27 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="app">
        <Searchbar />
        {loading ? (
          /* el ?  es = a un if*/ <div>Cargando Pokemones...</div>
        ) : (
          <Pokedex pokemons={pokemons} page={page} setPate={setPage} />
        )}
      </div>
    </div>
  );
}

export default App;
