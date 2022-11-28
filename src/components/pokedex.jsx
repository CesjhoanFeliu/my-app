import React from "react";
import Pagination from "./pagination";
import Pokemon from "./pokemon";
const Pokedex = (props) => {
  const { pokemons, page, setPage } = props;

  return (
    <div>
      <div>
        <div className="header">
          <h1>Pokedex</h1>

          <Pagination
            page={page}
            totalPages={110}
            onLeftClick={console.log}
            onRightClick={console.log}
          />
        </div>
        <div className="pokedex-grid">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Pokedex;
