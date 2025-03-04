<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps(['name', 'id']);
const route = useRoute();
const pokemon = ref(null);
const description = ref("");

const typeColors = {
    grass: '#78CD54', poison: '#A33EA1', fire: '#FF421C',
    water: '#6390F0', bug: '#A6B91A', flying: '#a98ff3',
    fairy: '#D685AD', ground: '#E2BF65', electric: '#F7D02C',
    fighting: '#c22e28', psychic: '#f95587', rock: '#b6a136',
    ghost: '#735797', steel: '#b7b7ce', ice: '#96d9d6',
    dragon: '#6f35fc', default: '#a8a77a'
};

async function fetchPokemon() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${route.params.id}`);
        const details = await response.json();

        pokemon.value = {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            types: details.types.map(t => t.type.name),
            typeColors: details.types.map(t => typeColors[t.type.name] || typeColors.default),
            height: details.height,
            weight: details.weight,
            abilities: details.abilities.map(a => a.ability.name),
            stats: details.stats.reduce((acc, stat) => {
                acc[stat.stat.name] = stat.base_stat;
                return acc;
            }, {}),
            evolutions: [] 
        };

        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${route.params.id}`);
        const speciesData = await speciesResponse.json();
        const flavor = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
        description.value = flavor ? flavor.flavor_text.replace(/\n|\f/g, ' ') : "No description available.";

        if (speciesData.evolution_chain?.url) {
            pokemon.value.evolutions = await fetchEvolutionChain(speciesData.evolution_chain.url);
        }
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
    }
}

async function fetchEvolutionChain(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const evoChain = [];
        let evoData = data.chain;

        while (evoData) {
            const pokeId = getPokemonIdFromUrl(evoData.species.url);
            const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
            const pokeData = await pokeResponse.json();

            evoChain.push({
                name: evoData.species.name,
                id: pokeId,
                image: pokeData.sprites.front_default 
            });

            evoData = evoData.evolves_to.length ? evoData.evolves_to[0] : null;
        }

        return evoChain;
    } catch (error) {
        console.error('Lỗi khi lấy chuỗi tiến hóa:', error);
        return [];
    }
}

function getPokemonIdFromUrl(url) {
    return url.split('/').filter(Boolean).pop();
}
onMounted(fetchPokemon);

const flavorText = computed(() => description.value);
</script>

<template>
    <router-link to="/" class="back"> < Back</router-link>
    <div class="container" v-if="pokemon">
        <div class="box">
            <div class="box-small">
                <img :src="pokemon.image" :alt="pokemon.name" class ="image">
                <div class="attribute">
                    <p v-for="(item, index) in pokemon.types" :key="index"
                    :style="{ backgroundColor: pokemon.typeColors[index]}">
                        {{ item }}
                    </p>
                </div>
                <h2 class="name">{{ pokemon.name }}</h2>
                <p class ="infor">{{ flavorText }}</p>
                <div class="detail">
                    <div>
                        <h3 class="detail-title">Height</h3>
                        <div class="detail-tag">{{ pokemon.height }}</div> 
                    </div>
                    <div>
                        <h3 class="detail-title">Weight</h3>
                        <div class="detail-tag">{{ pokemon.weight }}</div>
                    </div>
                </div>
                <div>
                    <h3 class="detail-title">Abilities</h3>
                    <div class="detail">
                        <p v-for="(item, index) in pokemon.abilities" :key="index" class="detail-tag">
                            {{ item }}
                        </p>
                    </div>
                </div>
                <div>
                    <h3 class ="detail-title">Stats</h3>
                    <div class ="detail">
                        <div v-for="(value, key) in pokemon.stats" :key="key" class="tag">
                            <p v-if="key === 'attack'" class="tag-item" style="background-color: #FF994D">ATK</p>
                            <p v-else-if="key === 'hp'" class="tag-item" style="background-color: #DF2140">HP</p>
                            <p v-else-if="key === 'defense'" class="tag-item" style="background-color: #EECD3D">DEF</p>
                            <p v-else-if="key === 'special-attack'" class="tag-item" style="background-color: #85DDFF">SPA</p>
                            <p v-else-if="key === 'special-defense'" class="tag-item" style=" background-color: #96DA83">SPD</p>
                            <p v-else class="tag-item" style="background-color: #FB94A8">SPD</p>
                            <p class ="tag-value">{{ value }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 class="detail-title">Evolution</h3>
                    <div class="evolution-container" v-if="pokemon.evolutions.length">
                        <div v-for="(evo, index) in pokemon.evolutions" :key="evo.id" class="evolution">
                            <span v-if="index > 0" class="evolution-arrow"> > </span>
                            <p>{{ evo.name }}</p>
                            <img :src="evo.image" :alt="evo.name">
                        </div>
                    </div>
                    <p v-else>Không có chuỗi tiến hóa.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
*{
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 15px;
    font-weight: 400;
}
router-link{
    text-decoration: none;
    
}
.back{
    display: block;
    position: fixed;
    top: 5%;
    left: 5%;
    border-radius: 30px;
    padding: 5px 10px;
    box-shadow: #63636333 0 4px 8px;
    z-index: 999;
    text-decoration: none;
    color: inherit; 
}
.container{
    display: flex;
    flex-wrap: wrap;
}
.box{
    padding-top: 50px;
    display: flex;
    text-align: center;
    justify-content: center;
    width: 100%;
}
.box-small{
    max-width: 500px;
    width: 100%;
    padding-top: 50px;
    text-align: center;
    margin: auto;
}
.image{
    width: 200px;
    height: 200px;
    margin: auto;
    background-size: contain;
}
.attribute{
    display: flex;
    justify-content: center;
    gap: 5px;
}
.attribute p{
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 14px;
    text-align: center;
    min-width: 50px;
    font-weight: 500;
    text-transform: capitalize;
}
.name{
    white-space: nowrap;
    text-align: center;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 24px;
}
.infor{
    margin-bottom: 10px;
    font-size: 17px;
}
.detail{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 5px;
}
.detail-title{
    text-align: center;
    margin-bottom: 5px;
    font-weight: 600;
}
.detail-tag{
    width: 100px;
    margin: 5px;
    padding: 2px;
    border-radius: 30px;
    background-color: #f6f8fc;
    text-align: center;
    text-transform: capitalize;
}
.tag {
    margin: 5px;
    padding: 5px;
    background-color: #f6f8fc;
    border-radius: 30px;
    box-shadow: #63636333 0 2px 8px;
    height: 59px;
}
.tag-item{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 10px;
    font-weight: 700;
    color: #fff;
    margin: 0px;
}
.tag-value{
    margin: 8px 0px 0px;
}
.evolution-container{
    display: flex;
    justify-content: center;
}
.evolution{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
}
.evolution p{
    white-space: nowrap;
    font-weight: 500;
    text-align: center;
    text-transform: capitalize;
}
.evolution img{
    width: 96px;
    height: 96px;
}
.evolution-arrow{
    margin-right: 7px;
    font-weight: 500;
}
</style>