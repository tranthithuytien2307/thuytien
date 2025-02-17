<script setup>
  import { ref } from 'vue';
  let count = ref(0);

  function handClick() {
    count.value++;
  }
</script>

<template>
    <div class="post_content">
        <div class="post_content">
            <div class="title">
                <div class="title_meta">
                    <div class="post_author">
                        <div class="post_card">
                            <div class="car">
                                <img src="https://images.viblo.asia/avatar/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg" alt="">
                            </div>
                        </div>
                        <div class="post_author_info">
                            <div class="name_container">
                                <a href="https://viblo.asia/u/Thanh_Tung" class="name">
                                    Huỳnh Thanh Tùng
                                </a>
                                <span class="text">@Thanh_Tung</span>
                                <span class="follow">Theo dõi</span>
                            </div>
                        </div>
                    </div>
                    <div class="post_author_right">
                        <div class="date_right">
                            Đã đăng vào thg 12 23, 2019 8:22 CH - 
                        </div>
                        <span class="date_bottom">4 phút đọc</span>
                        <div class="save-button">
                            <button @click="handClick">
                                <i class="fas fa-bookmark"></i>
                                <span>{{ count }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <h1 class="content_title">Những chú ý khi sử dụng v-model trong vue js</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .post_content {
        position: relative;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 40px 0 15px;
        top: 90px;
        padding: 0 25px;
        width: 60%;
    }
    .title {
        margin-bottom: 5px;
        width: 100%;
    }
    .title_meta {
        margin-bottom: 4px;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .post_author {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        white-space: nowrap;
        gap: 15px;
    }
    .post_card {
        position: relative;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        
    }
    .car {
        position: absolute;
        border-radius: 25px;
        border: 1px solid #ebeef5;
        color: #606266;
        text-align: justify;
        height: 45px;
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }
    .post_author_info {
        margin-right: 10px;
        line-height: 24px;
        display: flex;
        margin-left: 10px;
    }
    .name_container {
        margin-right: 5px;
    }
    .name {
        margin-right: 5px;
        color: #5488c7;
        text-decoration: none;
    }
    .text {
        color: #9b9b9b;
    }
    .follow {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: .1s;
        font-weight: 500;
        padding: 5px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .post_author_right {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        align-items: flex-end;
        min-width: 250px;
        max-width: auto;
    }
    .date_right {
        color: #9b9b9b;
        white-space: nowrap;
    }
    .date_bottom {
        color: #9b9b9b;
        justify-content: flex-start;
    }
    .save-button {
        display: flex;
        align-items: center;
        font-size: 24px;
        color: #888;
        cursor: pointer;
    }
    .save-button button {
        font-size: 14px;
        background-color: #fff;
        border: 1px solid #fff;
        padding: 8px 16px;
        cursor: pointer;
        transition: 0.2s;
    }
    .content_title {
        text-align: left;
        line-height: 1.2;
        font-weight: 700;
        font-size: 35px;
        width: 100%;
    }
    .save-button i {
        font-size: 20px;
        color: #555;
        transition: color 0.2s ease-in-out;
        margin-right: 5px;
    }
    .save-button button:hover i {
        color: #000;
    }
</style>
