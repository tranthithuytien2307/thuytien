<script setup>
import { onMounted, ref, computed } from 'vue';
import PokemonCard from './components/PokemonCard.vue';
import SearchPart from './components/SearchPart.vue';

const dataList = ref([]);
const searchQuery = ref("");

const typeColors = {
    grass: '#78CD54',
    poison: '#A33EA1',
    fire: '#FF421C',
    water: '#6390F0',
    bug: '#A6B91A',
    flying: '#a98ff3',
    fairy: '#D685AD',
    ground: '#E2BF65',
    electric: '#F7D02C',
    fighting: '#c22e28',
    psychic: '#f95587',
    rock: '#b6a136',
    ghost: '#735797',
    steel: '#b7b7ce',
    ice: '#96d9d6',
    dragon: '#6f35fc',
    default: '#a8a77a'
};

async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=36');
        const data = await response.json();

        const pokemonDetails = await Promise.all(
            data.results.map(async (item) => {
                const res = await fetch(item.url);
                const details = await res.json();
                return {
                    id: details.id,
                    name: details.name,
                    image: details.sprites.front_default,
                    types: details.types.map(t => t.type.name),
                    typeColors: details.types.map(t => typeColors[t.type.name] || typeColors.default)
                };
            })
        );
        
        dataList.value = pokemonDetails;
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
    }
}

const filteredList = computed(() => {
    if (!searchQuery.value) return dataList.value;
    return dataList.value.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

onMounted(fetchData);
</script>

<template>
    <SearchPart @updateSearch="searchQuery = $event" />
    <div class="pokemon-container">
        <template v-if="filteredList.length">
            <PokemonCard v-for="item in filteredList" :key="item.id" :data="item" />
        </template>
        <p v-else>Không tìm thấy Pokémon</p>
    </div>
</template>

<style scoped>
.pokemon-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 70px;
}
</style>
