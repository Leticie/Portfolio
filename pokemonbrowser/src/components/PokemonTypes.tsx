import { useState } from "react";
import "./PokemonTypes.css";
import { PokemonTypeSelected } from "./PokemonTypeSelected";
import axios from "axios";
import { POKEMON_TYPE_URL } from "../constants/constants";
import { typeIcons } from "./TypeIcons";



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
