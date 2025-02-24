<script>
</script>
<template>
  <div class ="mid-section">
    <div class ="content_part">
      <div class ="mid_content">
        <h3 style ="margin-top: 90px;">Mở đầu</h3>
        <p>
          v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. 
          Bạn có thể sử dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu nhập. Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành 😄 Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía Javascript bên trong các component.
        </p>
        <h3>Hoạt động của v-model</h3>
        <p>
          v-model là một syntax sugar (cú pháp ngọt - dễ nhìn) để viết v-on và v-bind với nhau trong một dòng. Tổng quan, hai dòng sau thực hiện cùng một hoạt động:
        </p>
        <div class="code-block">
            <code>
              input v-model="searchText"&gt;
              input :value="searchText" @change="searchText
              = $event.target.value"
            </code>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>
          Thành phần tùy chỉnh của v-model
          Trường hợp sử dụng v-model đối với thành phần tùy chỉnh, mặc định thì props được gọi là value và sự kiện của input được sử dụng. Value này có thể thay đổi được bằng định nghĩa ở phía thành phần tùy chỉnh.
        </p>
        <p>Ví dụng sau được trích từ trang tài liệu tham khảo chính thức:</p>
        <div class="code-block">
          <pre>
            <code>
              Vue.component('my-checkbox', {
                model: {
                  prop: 'checked',
                  event: 'change'
                },
                props: {
                  // Tùy theo điều này,  cho phép sử dụng thuộc tính `value`
                   với mục đích riêng biệt.
                  value: String,
                  // `checked` sẽ được sử dụng như thuộc tính thay thế
                   `value`
                  checked: {
                    type: Number,
                    default: 0
                  }
                },
                // ...
              })
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <h3>Những lỗi thường gặp</h3>
        <p>Viêt cả v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a>
          V-model như đã nói ở trên là Event handling (xử lý sự kiện). Nên việc kết hợp viết hai lần sử dụng v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a> là không cần thiết, và làm cho code trở nên Not Syntax Suger. Ví dụ như đoạn mã ở dưới.</p>
        <p>// Đoạn code lỗi</p>
        <div class="code-block">
          <pre>
            <code>
                input v-model="searchText" @change="(value)
                 => searchText = value"
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>Do bản thân v-model đã có sẵn Event handling (xử lý sự kiện) của sự kiện <a href="https://viblo.asia/u/change" target="_blank">@change</a>, nên sự kiện đối với change bị lặp lại hai lần. Nếu trường hợp muốn xử lý nhiều sự kiện hơn một sự kiện change, chúng ta nên dùng việc sử dụng v-model và thay thế vào đó là sử dụng đồng thời v-bind và v-on hoặc sử dụng thuộc tính thay thế searchText.
        </p>
        <p>// Đoạn code chuẩn Syntax Suger</p>
        <div class="code-block">
          <pre>
            <code>
                <&lt;input v-model="searchText"&gt;
                  &lt;script&gt;
                  data(){
                    return {
                      innerSearchText: ''
                    }
                  },
                  computed: {
                    searchText: {
                      get () {
                        return this.innerSearchText
                      },
                      set (value) {
                        this.innerSearchText = value
                      }
                    }
                  }
                &lt;/script&gt;
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>// Đoạn code chuẩn Syntax Suger</p>
        <div class="code-block">
          <pre>
            <code>
              &lt;input :value="searchText" @change="onChange"&gt;
              &lt;script&gt;
              data(){
                return {
                  searchText: ''
                }
              }
              &lt;/script&gt;
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>Sự kết hợp giữa v-model và set tạo động lực phát triển cho trường hợp kết hợp với Vuex với nhiều nội dung khác.</p>
        <p>Truyền nguyên props cho v-model
          Đối với biến v-model, trường hợp muốn làm cầu nói với props thì mình thấy rất nhiều. Nhưng nếu sử dụng điều này, lỗi cảnh báo sẽ được hiển thị vì props bị thay đổi trực tiếp.</p>
        <p>&lt;!-- Đoạn mã lỗi --&gt;</p>
        <div class="code-block">
          <pre>
            <code>
              &lt;input v-model="searchText"&gt;
              &lt;script&gt;
                props: {
                  searchText: String
                }
              &lt;/script&gt;
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>Ngoài ra, để sử lỗi này, việc định nghĩa data từ giá trị của props sẽ tạo ra lỗi tương tự. Ví dụ như đoạn code ở dưới:</p>
        <p>&lt;!-- Đoạn mã lỗi --&gt;</p>
        <div class="code-block">
          <pre>
            <code>
              &lt;input v-model="searchTextData"&gt; 
              &lt;script&gt;
                props: {
                  searchText: String
                },
                data() {
                  return {
                    searchTextData: this.$props.searchText 
                  }
                }
              &lt;/script&gt;
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <p>Đoạn mã này nhìn thì thấy có vẻ như hoạt động đúng. Nhưng trên thực tế, sau khi giá trị của props được khởi tạo thì giá trị giữa props và data sẽ không được đồng bộ. Cho nên, dù đã sử thành đoạn mã mới, nhưng việc sửa chữa vẫn không được thực thi đúng.</p>
        <p>Vậy thì làm thế nào để có thể tránh nó? Bằng cách sử dụng các thuộc tính được tính toán thì có thể khắc phục được..</p>
        <p>&lt;!-- Đoạn code chuẩn Syntax Suger --&gt;</p>
        <div class="code-block">
          <pre>
            <code>
              &lt;input v-model="searchText"&gt;
              &lt;script&gt;
                props: {
                  searchText: String
                }
              &lt;/script&gt;
            </code>
          </pre>
          <button class="copy-btn" onclick="copyCode()">
            <i class="fa-solid fa-book"></i>
          </button>
        </div>
        <h3>Tổng quan</h3>
        <p>Đó là, thay vì gán một giá trị trong thành phần này, nó sẽ gửi một giá trị dưới dạng một sự kiện cho thành phần cha. Và bằng cách viết lại giá trị của props ở phía thành phần cha, thành phần này có thể được sử dụng một cách chính xác. Ngoài ra còn có một phương pháp sử dụng watch thay vì setter, nhưng tôi không khuyến nghị cá nhân vì luồng dữ liệu rất khó nhìn thấy.</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .mid-section {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 900px;
      width: 100%;
      margin: 60px auto;
      padding: 40px 20px; 
  }

  .content_part {
      position: relative;
      font-size: 16px;
      display: flex;
      justify-content: center;
      width: 100%; 
      padding: 0 30px;
  }

  .mid_content {
      font-size: 18px;
      line-height: 1.75;
      font-family: Open Sans, sans-serif;
      width: 100%; 
  }
  h3{
    margin: 40px 0 16px;
  }
  p{
    margin-top: 5px;
  }
  .code-block {
  background-color: #f3f4f6;
  padding: 10px;
  border-radius: 6px;
  font-family: monospace;
  position: relative;
  display: inline-block;
  border: 1px solid #ddd;
  width: 100%;
  white-space: wrap;
  padding-left: 0px;
}

.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e0e0e0;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
}
a{
  color: #2b6dad;
  text-decoration: none;
}
code{
  display: flex;
  justify-content: flex-start;
}
</style>