import { useState } from "react";
import "./PokemonTypes.css";
import { PokemonTypeSelected } from "./PokemonTypeSelected";
import axios from "axios";
import { POKEMON_TYPE_URL } from "../constants/constants";

import { ReactComponent as Dark } from "../assets/typesIcons/dark.svg";
import { ReactComponent as Electric } from "../assets/typesIcons/electric.svg";
import { ReactComponent as Fire } from "../assets/typesIcons/fire.svg";
import { ReactComponent as Normal } from "../assets/typesIcons/normal.svg";
import { ReactComponent as Water } from "../assets/typesIcons/water.svg";
import { ReactComponent as Flying } from "../assets/typesIcons/flying.svg";
import { ReactComponent as Rock } from "../assets/typesIcons/rock.svg";
import { ReactComponent as Dragon } from "../assets/typesIcons/dragon.svg";
import { ReactComponent as Fairy } from "../assets/typesIcons/fairy.svg";
import { ReactComponent as Grass } from "../assets/typesIcons/grass.svg";
import { ReactComponent as Poison } from "../assets/typesIcons/poison.svg";
import { ReactComponent as Ground } from "../assets/typesIcons/ground.svg";
import { ReactComponent as Psychic } from "../assets/typesIcons/psychic.svg";
import { ReactComponent as Ice } from "../assets/typesIcons/ice.svg";
import { ReactComponent as Bug } from "../assets/typesIcons/bug.svg";
import { ReactComponent as Ghost } from "../assets/typesIcons/ghost.svg";
import { ReactComponent as Steel } from "../assets/typesIcons/steel.svg";
import { ReactComponent as Fighting } from "../assets/typesIcons/fighting.svg";


//svg names change on production, hence used key values pairs to render and assign css
const typeIcons = {
  normal: Normal,
  fighting: Fighting,
  flying: Flying,
  poison: Poison,
  ground: Ground,
  rock: Rock,
  bug: Bug,
  ghost: Ghost,
  steel: Steel,
  fire: Fire,
  water: Water,
  electric: Electric,
  psychic: Psychic,
  ice: Ice,
  dragon: Dragon,
  dark: Dark,
  fairy: Fairy,
};
interface PokemonTypeSelectedI {
  handlePokemonInfo: (data: any) => void;
}

export const PokemonTypes = ({ handlePokemonInfo }: PokemonTypeSelectedI) => {
  const [pokemonTypeList, setPokemonTypeList] = useState(null);

  const handlePokemonTypeList = (list) => setPokemonTypeList(list);

  const handleClick = (index: number) => {
    axios
      .get(`${POKEMON_TYPE_URL}${index + 1}`)
      .then((response) => {
        handlePokemonTypeList(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  console.log(typeIcons);
  return (
    <>
      {pokemonTypeList ? (
        <PokemonTypeSelected
          pokemonTypeList={pokemonTypeList}
          handlePokemonInfo={handlePokemonInfo}
        />
      ) : (
        <div className="logos">
          {Object.entries(typeIcons).map(([TypeKey, TypeIcon]: any, index) => (
            <div
              onClick={() => {
                handleClick(index);
              }}
              key={index}
              className={`image-type ${TypeKey}`}
            >
              <TypeIcon />
            </div>
          ))}
        </div>
      )}
    </>
  );
};
