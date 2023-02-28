import "./App.css";
import "./fonts/PokemonSolid.ttf";
import { PokemonTypes } from "./components/PokemonTypes";
import { useState } from "react";
import axios from "axios";
import { PokemonInfo } from "./components/PokemonInfo";
import { SINGLE_POKEMON_URL } from "./constants/constants";

function App() {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setSearchedPokemon(event.target.value);
    setError("");
  };

  const handlePokemonInfo = (data) => setSelectedPokemonInfo(data);

  const handleClick = (event) => {
    event.preventDefault();
    if (searchedPokemon === "") {
      return setError("Enter pokemon name or number")
    }  
      axios
        .get(`${SINGLE_POKEMON_URL}${searchedPokemon}`)
        .then((response) => {
          handlePokemonInfo(response.data);
        })
        .catch((e) => {
          e.response.status === 404 ? setError("Pokemon not found") : setError("Something went wrong");
      });
  };

  return (
    <div className="App">
      <h1>Pokémon browser</h1>
      <div className="main-content">
        <form>
          <input onChange={handleInputChange}></input>
          <button className="button-search" onClick={handleClick}>Search</button>
        </form>
        <div className="error">{error}</div>
        {selectedPokemonInfo ? (
          <PokemonInfo
            selectedPokemonInfo={selectedPokemonInfo}
            handlePokemonInfo={handlePokemonInfo}
          />
        ) : (
          <PokemonTypes handlePokemonInfo={handlePokemonInfo} />
        )}
      </div>
    </div>
  );
}

export default App;
