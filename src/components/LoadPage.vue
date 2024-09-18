<template>
  <div class="loadpage">
    <h1>Welcome to Your BDAP Guide System</h1>
    <ul><button @click="goToMainPage" class="button">进入导航</button></ul>
    <!-- <li><a href="10.92.64.242:8080/#/" target="_blank" rel="noopener">Go Back To BDAP</a></li> -->
    <img src="@/assets/background.jpg" class="background">
  </div>
</template>

<script>
export default {
 methods:{
    goToMainPage(){
      this.$router.push('/view/MainPage');
    }
  }
}
</script>


<style scoped>
.loadpage {
  display: flex;
  flex-direction: column;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 设置容器高度为视口高度 */
  margin-left: 230px;
}
h1{
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
  font-size: 40px;
}
button{
  font-size: 25px;
}
li {
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
}
a {
  color: #1e2b30;
}

</style>
