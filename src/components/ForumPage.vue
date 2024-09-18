<template>
  <div>
    <a>论坛</a>
     <div class="post-form">
      <div id="app" class="container">
    <!-- 消息列表 -->
    <div class="message-list">
      <div class="message" v-for="(message, index) in messages" :key="index">
        {{ message }}
      </div>
    </div>
    <!-- 发言框 -->
    <div class="message-input">
      <input type="text" v-model="newMessage" placeholder="输入您的消息...">
      <button @click="sendMessage">发送</button>
    </div>
  </div>
 </div>
  </div>
</template>

<script>
 new Vue({
      el: '#app',
      data: {
        // 消息列表
        messages: [],
        // 新消息
        newMessage: ''
      },
      methods: {
        // 发送消息
        sendMessage() {
          if (this.newMessage.trim() !== '') {
            this.messages.push(this.newMessage);
            this.newMessage = ''; // 清空输入框
          }
        }
      }
    });
</script>

<style>
    /* 样式 */
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .message-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
    .message-input input[type="text"] {
      flex: 1;
      padding: 10px;
      font-size: 16px;
    }
    .message-input button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .message-list {
      margin-top: 20px;
    }
    .message {
      background-color: #f4f4f4;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
    }
  </style>