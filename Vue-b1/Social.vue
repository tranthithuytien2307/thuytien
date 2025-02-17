<script setup>
import { ref } from 'vue';

let count = ref(0);

function handClick() {
  count.value++;
}
function handClick_up() {
  count.value--;
}
</script>

<template>
  <div class="main">
    <div class="main_container">
      <div class="social_container">
        <div class="social_car">
          <img
            src="https://images.viblo.asia/avatar/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg"
            alt="avatar"
            class="profile-img"
          />
        </div>
        <button @click="handClick()" class="icon-btn">
          <i class="fa-solid fa-chevron-up"></i>
        </button>
        <div class="vote-count">{{ count }}</div>
        <button @click="handClick_up()" class="icon-btn">
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <button class="icon-btn"><i class="fa-regular fa-bookmark"></i></button>
        <button class="icon-btn"><i class="fa-solid fa-font"></i></button>
        <button class="icon-btn"><i class="fa-brands fa-facebook"></i></button>
        <button class="icon-btn"><i class="fa-brands fa-twitter"></i></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: 0 30px;
  padding: 24px 15px;
}
.main_container {
  padding: 50px 0 0;
}
.social_container {
  position: fixed;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 80px;
  top: 50%;
  transform: translateY(-20%);
  gap: 5px;
}

.social_car {
  background: #fff;
  border-radius: 50%;
  border: 1px solid #ebeef5;
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.profile-img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
}

.icon-btn {
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #666;
}

.icon-btn:hover {
  background: #f0f0f0;
}

.vote-count {
  font-size: 16px;
  font-weight: bold;
  color: gray;
}
</style>
