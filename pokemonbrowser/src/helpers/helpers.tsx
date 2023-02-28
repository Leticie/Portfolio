export const getPokemonNames = (pokemonTypeList: any) => {
    const pokemonNames:Array<string> = pokemonTypeList.pokemon.map((item:any) => item.pokemon.name)
    return pokemonNames
}

export const getWeight = (selectedPokemonInfo: any) => {
    const originalWeight = selectedPokemonInfo.weight
    const weightInKilos = originalWeight / 10
    return weightInKilos
}

export const getHeight = (selectedPokemonInfo: any) => {
    const originalHeight = selectedPokemonInfo.height
    const heightInCentimeters = originalHeight * 10 
    return heightInCentimeters
}