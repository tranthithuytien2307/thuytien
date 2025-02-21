<script setup>

</script>

<template>
  <div class ="header">
    <div class ="header_part">
      <div class ="logo">
        <img src="https://viblo.asia/logo_full.svg" alt="logo viblo">
      </div>
      <div class ="header_list">
        <div class ="header_item">Bài Viết</div>
        <div class ="header_item">Hỏi Đáp</div>
        <div class ="header_item">Thảo Luận</div>
      </div>
    </div>
    <div class ="header_part">
      <div class ="header_search">
        <div class ="search_button">
          <div class ="search_text">
            Tìm kiếm trên Viblo
          </div>
          <div class="search-logo">
            <div class="icon"></div>
        </div>
        </div>
      </div>
      <div class ="part_right">
        <div class ="part_vn">
          <div class ="logo_vn">
            <img src="https://viblo.asia/images/vi-flag-32x48.png" alt="">
          </div>
          <span>VI</span>
          <div class="language-dropdown">
            <a href="#">Tiếng Việt</a>
            <a href="#">English</a>
          </div>
        </div>
        <div class ="part_right_text">
          Đăng nhập/Đăng ký
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .header{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    height: 60px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .header_part{
    display: flex;
  }
  .logo img{
    margin-right: 40px;
    height: 21px;
    width: 62px;
    margin-top: 3px;
  }
  .header_list{
    display: flex;
  }
  .header_item{
    margin-right: 25px;
    display: flex;
    justify-content: center;
    align-content: center;
    font-weight: 500;
    color: #9B9B9B;
  }
  .header_item:hover{
    color: #0b1a33;
  }
  .header_search{
    margin-right: 10px;
    position: relative;
  }
  .search_button{
    width: auto;
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid #9B9B9B;
    border-radius: 1px;
    gap: 15px;
  }
  .search_text{
    white-space: nowrap;
    width: 80%;
    padding: 5px 15px;
    color: #9B9B9B;
  }

  .search-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    width: 20%;
    background-color: #5488C7;
    padding: 8px 12px;
  }

  .search-logo .icon {
    width: 18px;
    height: 20px;
    border: 3px solid #fff;
    border-radius: 50%;
    position: relative;
  }

  .search-logo .icon::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 2px;
  background: #fff;
  transform: rotate(45deg);
  bottom: -3px;
  right: -3px;
  }
  .part_right{
    margin-left: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .part_vn{
    margin-left: 5px;
    display: flex;
    align-items: center;
    padding: 5px 6px;
    position: relative;
  }
  .logo_vn{
    display: flex;
    justify-content: center;
    align-self: center;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    overflow: hidden;
  }
  .part_vn span {
    align-items: center;
    margin-left: 5px;
    color: #9B9B9B;
    font-size: 14px;
  }
  .language-dropdown {
    padding: 7px 0;
    margin: 15px;
    display: none;
    position: absolute;
    top: 40px;
    left: 0;
    background: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    z-index: 10;
    transform: translateX(-70%) translateY(-20%);
  }

  .part_vn:hover .language-dropdown {
    display: block;
  }

  .language-dropdown a {
    display: block;
    padding: 8px 16px;
    color: #555;
    background: #fff;
    text-decoration: none;
    transition: background-color 0.3s ease-out;
    white-space: nowrap;
  }

  .language-dropdown a:hover {
    background: #b0cef3;
    color: #5d95d8;
  }
  .part_right_text{
    padding: 12px 0px;
    color: #5488C7;
    font-weight: 500;
  }
  .part_right_text:hover{
    color:#6da4e7;
  }
</style>
