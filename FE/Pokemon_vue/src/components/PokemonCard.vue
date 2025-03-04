<script setup>
const props = defineProps(['data']);
</script>

<template>
   <div class="card-box" @click="$emit('click', props.data.id, props.data.name)">
        <p>#{{ props.data.id }}</p>
        <img :src="props.data.image" :alt="props.data.name" height="100" width="100">
        <p class ="name">{{ props.data.name }}</p>
        <div class="type-box">
            <p v-for="(item, index) in props.data.types" 
               :key="index" 
               :style="{ backgroundColor: props.data.typeColors[index]}">
                {{ item }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card-box {
    border-radius: 10px;
    padding: 15px;
    box-shadow: #0000001a 0 4px 12px;
    background: white;
    text-align: center;
    transition: box-shadow 0.4s ease-out;
    width: 13%;
    min-width: 15%px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card-box:hover {
    cursor: pointer;
    box-shadow: 0 5px 11px #0000002e, 0 4px 15px #00000026;
}

.name {
    font-size: 24px;
    font-weight: 600;
    white-space: nowrap; 
    overflow: hidden;
}

.card-box img {
    width: 150px;
    height: 150px;
}

.card-box p {
    margin: 10px 0;
    text-align: center;
}

.type-box {
    display: flex;
    gap: 5px;
    justify-content: center;
    flex-wrap: wrap; 
    width: 100%;
}

.type-box p {
    border-radius: 5px;
    padding: 5px 8px;
    font-size: 14px;
    text-align: center;
    min-width: 50px;
    font-weight: 500;
}
.name, .type-box p {
    text-transform: capitalize;
}
@media (max-width: 1200px){
    .card-box {
        width: 20%;
    }
}
@media (max-width: 960px){
    .card-box {
        width: 30%;
    }
}
@media (max-width: 770px){
    .card-box {
        width: 45%;
    }
}
@media (max-width: 500px){
    .card-box {
        width: 90%; 
    }
}

</style>
