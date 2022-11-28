import React from "react";

const Navbar = () => {
  let pokelogo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  //Nos tiene que retornar html usamos return
  return (
    <nav>
      <div>
        <div className="nav-flex">
          <img src={pokelogo} alt="pokeimg" className="navbar-img " />
          <div className="cora">🧡</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
