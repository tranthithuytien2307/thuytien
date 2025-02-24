<script setup>
import { ref } from 'vue';

const searchTerm = ref("");
const emit = defineEmits(["updateSearch"]);

function updateSearch() {
    emit("updateSearch", searchTerm.value.trim().toLowerCase());
}
</script>

<template>
    <div class="header">
        <div class="title">
            <h2>Pokemon API</h2>
        </div>
        <div class="search_part">
            <input 
                v-model="searchTerm"
                @input="updateSearch"
                class="search" 
                placeholder="Search some Pokemon..."
            />
        </div>
    </div>
</template>
<style scoped>
    body{
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-weight: 400;
    }
    .header{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        margin-bottom: 50px;
        font-size: 25px;
        color: #2C3E50;
    }
    .search_part {
        max-width: 500px;
        width: 100%;
        margin: 0 15px 50px;
    }
    .search{
        width: 100%;
        min-width: 100%;
        border: none;
        border-radius: 30px;
        outline: 1px solid #00000036;
        box-shadow: #64646f33 0 7px 29px;
        font-size: 14px;
        transition: all 0.2s ease;
        padding: 20px;
        color: rgb(88, 88, 88);
    }
</style>