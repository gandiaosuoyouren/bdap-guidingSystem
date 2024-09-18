<template>
  <div class="search-container">
    <div class="content">
      <div class="search-input">
        
        <input type="text" v-model="question" placeholder="请输入您的问题">
        <button @click="search">搜索</button>
      </div>

      <div v-if="loading">正在加载...</div>

      <div v-if="error" class="error">{{ error }}</div>

      <div class="result" v-if="answers.length > 0">
        <h3>搜索结果：</h3>
        <ul>
          <li v-for="(answer, index) in answers" :key="index">{{ answer }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: '',
      loading: false,
      error: '',
      answers: []
    };
  },
  methods: {
    async search() {
      this.loading = true;
      this.error = '';
      this.answers = [];

      try {
        const response = await fetch('http://bdap-cluster-05:3000/api/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ question: this.question })
        });

        if (!response.ok) {
          throw new Error('服务器出错');
        }

        const data = await response.json();
        this.answers = data.answer;
      } catch (error) {
        this.error = '查询出错';
        console.error('Error searching:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.search-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--navbar-color1); /* 背景颜色 */
  padding: 5px; /* 可以根据需要调整内边距 */
  margin-left: 230px;
  left: 0;
}

.content {
  width: 100%;
  
}

.search-input {
  margin-bottom: 10px; /* 调整搜索框与结果之间的间距 */
}
.search-input input[type="text"] {
  flex: 1; /* 输入框自动填充剩余空间 */
  padding: 10px; /* 输入框内边距 */
  font-size: 16px; /* 输入框文字大小 */
  border: 1px solid #ccc; /* 输入框边框样式 */
  border-radius: 5px; /* 输入框边框圆角 */
}
.search-input button {
  padding: 10px 20px; /* 按钮内边距 */
  font-size: 16px; /* 按钮文字大小 */
  background-color: #7cacdb; /* 按钮背景颜色 */
  color: #faf8f8; /* 按钮文字颜色 */
  border: none; /* 移除按钮边框 */
  border-radius: 5px; /* 按钮边框圆角 */
  cursor: pointer; /* 鼠标悬停样式 */
  margin-left: 10px; /* 按钮与输入框之间的间距 */
}
.result {
  
  padding: 10px; /* 可以根据需要调整内边距 */
}

.result ul {
  list-style-type: none; /* 移除默认项目符号 */
  margin-top: 20px;
 
}
.result ul li {
  
  margin-bottom: 10px; /* 设置每个搜索结果之间的间距，可根据需要调整 */
  margin-right: 5px;
}

.error {
  color: red; /* 错误消息颜色 */
  margin-top: 10px;
}
</style>
