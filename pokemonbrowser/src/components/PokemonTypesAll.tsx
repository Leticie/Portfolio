import { useState } from "react";
import "./PokemonTypesAll.css";
import { PokemonTypeSelected } from "./PokemonTypeSelected";
import axios from "axios";
import { POKEMON_TYPE_URL } from "../constants/constants";
import { typeIcons } from "./TypeIcons";



interface PokemonTypesAllI {
  handlePokemonInfo: (data: any) => void;
  loading: boolean;
}

export const PokemonTypesAll = ({ handlePokemonInfo, loading }: PokemonTypesAllI) => {
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

  return (
    <>
      {pokemonTypeList ? (
        <PokemonTypeSelected
          pokemonTypeList={pokemonTypeList}
          loading={loading}
          handlePokemonInfo={handlePokemonInfo}
        />
      ) : (
        <div className={`logos loading-${loading}`}>
            {Object.entries(typeIcons).map(([TypeKey, TypeIcon]: any, index) => (
              <button
                onClick={() => {
                  handleClick(index);
                }}
                key={index}
                className={`image-type ${TypeKey}`}
                disabled={loading}
              >
                <TypeIcon />  
              </button>  
            ))} 
        </div>
      )}
    </>
  );
};
