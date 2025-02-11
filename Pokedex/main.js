const URL="https://pokeapi.co/api/v2/pokemon"

const searchInput =document.getElementById("search");
const pokedexContainer = document.getElementById("pokedex");

//async se utilizo para manejar la peticion a la APi de forma asincronica. Mientras se espera
//la resp de la Api, el programa puede seguir ejeutando otras tareas sin bloquearse
async function searchPokemon() {
    const searchPokemon= searchInput.value.toLowerCase();

    try{
        const response= await fetch (`${URL}/${searchPokemon}`); // Corregida la URL
        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }
        const data = await response.json();

        pokedexContainer.innerHTML= `
        
            <h2>${data.name.toLowerCase()}</h2>
            <img src = "${data.sprites.front_default}" alt="${data.name}"></img>
            <p>Numero: ${data.id}</p>
            <p>Altura: ${data.height/10} m</p>
            <p>Peso: ${data.weight/10} kg </p>
            `;

    } catch(error) {
        console.error(error);
        pokedexContainer.innerHTML = `<p style="color: red;">Pokémon no encontrado</p>`

    }
}
document.getElementById("btn-search").addEventListener("click", searchPokemon);