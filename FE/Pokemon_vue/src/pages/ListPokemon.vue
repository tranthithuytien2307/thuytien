<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import PokemonCard from '../components/PokemonCard.vue';
import SearchPart from '../components/SearchPart.vue';
import LoadPart from '../components/LoadPart.vue';

const dataList = ref([]); 
const displayedList = ref([]); 
const searchQuery = ref("");
const router = useRouter();
const initialLoad = 36; 
const typeColors = {
    grass: '#78CD54', poison: '#A33EA1', fire: '#FF421C',
    water: '#6390F0', bug: '#A6B91A', flying: '#a98ff3',
    fairy: '#D685AD', ground: '#E2BF65', electric: '#F7D02C',
    fighting: '#c22e28', psychic: '#f95587', rock: '#b6a136',
    ghost: '#735797', steel: '#b7b7ce', ice: '#96d9d6',
    dragon: '#6f35fc', default: '#a8a77a'
};

async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898'); // Lấy sẵn 200 Pokémon
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
        displayedList.value = pokemonDetails.slice(0, initialLoad); 
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
    }
}

function loadMore() {
    const currentLength = displayedList.value.length;
    const newLength = Math.min(currentLength * 2, dataList.value.length); 
    displayedList.value = dataList.value.slice(0, newLength);
}

const filteredList = computed(() => {
    if (!searchQuery.value) return displayedList.value;
    return displayedList.value.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

function goToDetail(id, name) {
    router.push(`/pokemon/${name}/${id}`);
}

onMounted(fetchData);
</script>

<template>
    <SearchPart @updateSearch="searchQuery = $event" />
    <div class="pokemon-container">
        <p v-if="dataList.length === 0" class="getting">
            Getting data from PoKéDex.........
        </p>
        
        <PokemonCard 
            v-else-if="filteredList.length > 0"
            v-for="item in filteredList" 
            :key="item.id" 
            :data="item"
            @click="() => goToDetail(item.id, item.name)" 
        />
        
        <p v-else class="no-result">
            No Pokémon matched with <span class="highlight">"{{ searchQuery }}"</span>
        </p>
    </div>
    <p v-if="displayedList.length < dataList.length && filteredList.length > 0">
        <LoadPart @click="loadMore" />
    </p>
</template>


<style scoped>
*{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
}
.pokemon-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 70px;
}
.getting{
    font-size: 30px;
    color:#2C3E50;
}
.no-result{
    font-size: 24px;
    color: #2C3E50;
}
.highlight{
    color: #080b0f;
    font-size: 24px;
    font-weight: 500;
}
</style>
