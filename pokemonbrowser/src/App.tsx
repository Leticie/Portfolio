import "./App.css";
import "./fonts/PokemonSolid.ttf";
import { PokemonTypesAll } from "./components/PokemonTypesAll";
import { useState } from "react";
import axios from "axios";
import { PokemonCard } from "./components/PokemonCard";
import { SINGLE_POKEMON_URL, STATUS_NOT_FOUND } from "./constants/constants";


function App() {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const [selectedPokemonInfo, setSelectedPokemonInfo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setSearchedPokemon(event.target.value.toLowerCase());
    setError("");
  };

  const handlePokemonInfo = (data) => setSelectedPokemonInfo(data);
  const handleLoading = (value) => setLoading(value);

  const handleClick = (event) => {
    event.preventDefault();
    if (searchedPokemon === "") {
      return setError("Enter pokemon name or number");
    }
    handleLoading(true);
    axios
      .get(`${SINGLE_POKEMON_URL}${searchedPokemon}`)
      .then((response) => {
        handlePokemonInfo(response.data);
      })
      .catch((e) => {
        e.response.status === STATUS_NOT_FOUND
          ? setError("Pokemon not found")
          : setError("Something went wrong");
      })
      .finally(() => handleLoading(false));
  };

  return (
    <div className="App">
      <div className={`loading-${loading}`}>
        <h1>Pokémon browser</h1>
        <div className="main-content">
          <form>
            <input onChange={handleInputChange}></input>
            <button
              className="button-search"
              onClick={handleClick}
              disabled={loading}
            >
              Search
            </button>
          </form>
          <div className="error">{error}</div>
          {selectedPokemonInfo ? (
            <PokemonCard
              selectedPokemonInfo={selectedPokemonInfo}
              handlePokemonInfo={handlePokemonInfo}
              loading={loading}
            />
          ) : (
            <PokemonTypesAll
              handlePokemonInfo={handlePokemonInfo}
              loading={loading}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
