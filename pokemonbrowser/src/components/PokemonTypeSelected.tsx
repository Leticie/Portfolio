import "./PokemonTypeSelected.css";
import { ReactComponent as Pokeball } from "../assets/images/pokeball.svg";
import axios from "axios";
import { getPokemonNames } from "../helpers/helpers";
import { SINGLE_POKEMON_URL } from "../constants/constants";
interface PokemonTypeSelectedI {
  pokemonTypeList: any;
  loading: boolean;
  handlePokemonInfo: (data: any) => void;
}

export const PokemonTypeSelected = ({ pokemonTypeList, loading, handlePokemonInfo }: PokemonTypeSelectedI) => {
  const handleClickPokeball = (pokemon: string) => {
    axios
        .get(`${SINGLE_POKEMON_URL}${pokemon}`)
        .then((response) => {
            handlePokemonInfo(response.data);
        }); 
  };    

  return (
    <div className="pokeballs-display">
      {getPokemonNames(pokemonTypeList).map((pokemon: any) => {
        //problematic API
        if (pokemon.includes("-")) {
          return null;
        }
        return (
          <div
            key={pokemon}
            onClick={() => {
              if (!loading) {
              handleClickPokeball(pokemon);
              }
            }}
          >
            <Pokeball className={`pokeball pokeball-loading-${loading}`}/>
            <p>{pokemon}</p>

          </div>
        );
      })}
    </div>
  );
};
