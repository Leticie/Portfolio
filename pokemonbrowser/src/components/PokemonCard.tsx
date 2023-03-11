import "./PokemonCard.css"
import { getWeight } from "../helpers/helpers";
import { getHeight } from "../helpers/helpers";

interface PokemonCardI {
  loading: boolean;
  selectedPokemonInfo: any;
  handlePokemonInfo: (data: any) => void
}


export const PokemonCard = ({ selectedPokemonInfo, handlePokemonInfo, loading } : PokemonCardI) => (
  <>
    <div className="flip-card" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h2>{selectedPokemonInfo.name.toUpperCase()} #{selectedPokemonInfo.id}</h2>
          <div>
            <p className="pokemon-info">height: {getHeight(selectedPokemonInfo)} cm</p>
            <p className="pokemon-info">weight: {getWeight(selectedPokemonInfo)} kg</p>
            <p className="pokemon-info">type: {
              //ternary operator used if multitype pokemon
              selectedPokemonInfo.types.length === 1
                ? `${selectedPokemonInfo.types[0].type.name}`
                : `${selectedPokemonInfo.types[0].type.name} and ${selectedPokemonInfo.types[1].type.name}`
              }
            </p>
          </div>
          <img
            className="image"
            src={selectedPokemonInfo.sprites.other.home.front_default}
            alt="Pokemon image"
          />
        </div>
        <div className="flip-card-back">
          <h3>Stats</h3>
          {selectedPokemonInfo.stats.map((statistic) => (
              <div key={statistic.stat.name} className="stats">
                <div className="stat-name">{statistic.stat.name}</div>
                <div className="stat-number">{statistic.base_stat}</div>
              </div> 
          ))}
        </div>
      </div>
    </div>
    <button className="back-button" onClick={() => handlePokemonInfo("")} disabled={loading}>Back to main page</button>
  </>
)  


