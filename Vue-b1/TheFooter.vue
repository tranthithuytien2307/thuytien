<template>
    <div class="register-banner">
        <div class="logo">
            <img src="https://viblo.asia/favicon-128.png" alt="Viblo Logo">
        </div>
        <span>
            <p class="banner-text">Hãy đăng ký một tài khoản Viblo để nhận được nhiều bài viết thú vị hơn.</p>
            <div class="buttons">
                <button class="login-btn">Đăng nhập</button>
                <button class="register-btn">Đăng ký</button>
            </div>
        </span>
        <button class="close-btn">X</button>
    </div>
</template>
<style scoped>
    .register-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        margin: 0 auto;
        border: 1px solid #ddd;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 1000;
        gap: 15px;
    }
    .logo img {
        width: 60px;
        height: 60px;
    }

    .banner-text {
        flex-grow: 1;
        font-size: 18px;
        color: #333;
    }

    .buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .login-btn, .register-btn {
        padding: 8px 12px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        color: white;
    }

    .login-btn {
        background-color: #1877f2;
    }

    .register-btn {
        background-color: #28a745;
    }

    .close-btn {
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #3572b0;
        margin-bottom: 25px;
        font-weight: 600;
    }
</style>