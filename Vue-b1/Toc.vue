<script></script>
<template>
    <div class="toc">
        <div class="toc-title">MỤC LỤC</div>
        <ul>
            <li><a href="#" class="active">Mở đầu</a></li>
            <li><a href="#">Hoạt động của v-model</a></li>
            <li><a href="#">Những lỗi thường gặp</a></li>
            <li><a href="#">Tổng quan</a></li>
        </ul>
    </div>
</template>
<style scoped>
    .toc {
        width: 200px;
        border-left: 3px solid #1a73e8;
        padding-left: 10px;
        margin-top: 200px;
    }

    .toc-title {
        font-weight: bold;
        font-size: 16px;
        position: relative;
        margin-bottom: 10px;
    }

    .toc-title::after {
        content: "";
        display: block;
        width: 50%;
        height: 1px;
        background: #ccc;
        position: absolute;
        bottom: 0;
        left: 50px;
        margin-left: 15px;
    }

    .toc ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .toc a {
        text-decoration: none;
        color: black;
        font-size: 14px;
    }
    .toc li {
        margin: 5px 0;
        padding-left: 10px;
        position: relative;
    }

    .toc .active {
        font-weight: bold;
        color: #1a73e8;
        border-left: 3
    }
</style>