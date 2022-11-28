export const searchPokemon = async (poke) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
    const respuesta = await fetch(url);
    //Obtenemos el api y lo hacemos objeto .json
    const data = await respuesta.json();
    return data;
  } catch (error) {
    alert("ingresa un dato valido");
  }
};
//Limit y offset van de la mano con la url de la pokeapi
export const getPokemons = async (limit = 27, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    const respuesta = await fetch(url);
    //Obtenemos el api y lo hacemos objeto .json
    const data = await respuesta.json();
    return data;
  } catch (error) {
    alert("ingresa un dato valido");
  }
};

export const getPokemonData = async (url) => {
  try {
    const respuesta = await fetch(url);
    //Obtenemos el api y lo hacemos objeto .json
    const data = await respuesta.json();
    return data;
  } catch (error) {
    alert("ingresa un dato valido");
  }
};
