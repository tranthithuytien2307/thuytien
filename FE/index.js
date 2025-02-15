const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=898";
const container = document.getElementById("pokemon-container");
const button = document.querySelector(".load_button");
const input = document.querySelector(".search");
let start = 0;
const limit = 36;
let pokemonList = [];
let allPokemonDetails = [];

async function fetchPokemon() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        pokemonList = data.results;

        allPokemonDetails = [];
        for (let i = 0; i < pokemonList.length; i++) {
            const details = await fetchPokemonDetails(pokemonList[i], i + 1);
            allPokemonDetails.push(details);
        }

        displayNextBatch();
    } catch (error) {
        console.error("Lỗi khi lấy danh sách Pokémon: ", error);
    }
}

async function fetchPokemonDetails(pokemon, id) {
    try {
        const response = await fetch(pokemon.url);
        const data = await response.json();
        return {
            id,
            name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            image: data.sprites.front_default,
            types: data.types.map((type) => type.type.name),
        };
    } catch (error) {
        console.error("Lỗi khi lấy thông tin chi tiết Pokémon: ", error);
        return null;
    }
}

async function displayNextBatch() {
    let count = start === 0 ? limit : start; 
    let end = Math.min(start + count, pokemonList.length); 

    for (let i = start; i < end; i++) {
        const pokemonData = await fetchPokemonDetails(pokemonList[i], i + 1);
        if (pokemonData) {
            displayPokemon(pokemonData);
        }
    }

    start = end;

    if (start >= pokemonList.length) {
        button.style.display = "none";
    }
}

function displayPokemon({ id, name, image, types }) {
    const card = document.createElement("div");
    card.classList.add("card");

    const idElement = document.createElement("h3");
    idElement.textContent = `#${id}`;

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.alt = name;

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;

    const typesContainer = document.createElement("div");
    typesContainer.classList.add("types-container");

    types.forEach((type) => {
        const typeElement = document.createElement("span");
        typeElement.classList.add("type", type);
        typeElement.textContent = type;
        typesContainer.appendChild(typeElement);
    });

    card.appendChild(idElement);
    card.appendChild(imgElement);
    card.appendChild(nameElement);
    card.appendChild(typesContainer);
    container.appendChild(card);
}

input.addEventListener("input", function () {
    const searchTerm = input.value.toLowerCase().trim();
    container.innerHTML = "";

    if (searchTerm === "") {
        start = 0;
        displayNextBatch();
        return;
    }

    const filteredPokemon = allPokemonDetails.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm)
    );

    if (filteredPokemon.length === 0) {
        container.innerHTML = "<p>Không tìm thấy Pokémon</p>";
        return;
    }

    filteredPokemon.forEach(displayPokemon);
});

fetchPokemon();
button.addEventListener("click", displayNextBatch);