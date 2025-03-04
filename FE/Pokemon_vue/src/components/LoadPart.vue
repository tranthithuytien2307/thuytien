<script setup>
defineEmits(['click']);
</script>

<template>
    <div class="end">
        <div class="load_button" @click="$emit('click')">Load More</div>
    </div>
</template>

<style scoped>
.end {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    margin-bottom: 50px;
}
.load_button {
    padding: 20px 25px;
    cursor: pointer;
    border: none;
    background-color: #ff4d4f;
    color: #fff;
    border-radius: 10px;
    font-size: 16px;
    transition: all 0.25s ease;
}
.load_button:hover {
    background-color: #ff7875;
}
</style>
