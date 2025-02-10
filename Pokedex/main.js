const URL="https://pokeapi.co/api/v2/pokemon"

const searchInput =document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

async function searchPokemon() {
    const searchPokemon= searchInput.ariaValueMax.toLowerCase();

    try{
        const response= await fetch (URL + searchPokemon)
        const data = await response.json();

    } catch(error) {

    }
}