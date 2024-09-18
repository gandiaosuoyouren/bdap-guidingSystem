<!-- LeftNavbar.vue -->

<template>
  <div class="leftnavbar">
    <img src="@/assets/3.jpg" class="avatar-icon">
    <div class="change" @click="$router.push('/ChangePage')">修改样式</div>
    <ul>
      <li @click="$router.push('/TermList')">平台简介</li>
      <li @click="$router.push('/ModuleDisplay')">模块展示</li>
      <li @click="$router.push('/RelatedAlgorithm')">相关算法</li>
      <li @click="$router.push('/OperationProcess')">操作流程</li>  
    </ul>
    <!-- <h1 @click="$router.push('/ForumPage')">论坛</h1>  -->
    <!-- <h4><a href="10.92.64.242:8080/#/" target="_blank" rel="noopener">Go Back To BDAP</a></h4> -->
    
  </div>
</template>

<script>

</script>

<style scoped>

.leftnavbar {
  position:fixed;
  width: 200px;
  background-color:var(--navbar-color); 
  padding: 10px;
  height: 100%;
  justify-content: left; 
  align-items: left; 
}

.leftnavbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  margin-bottom: 20px;
}

.avatar-icon {
  width: 60px;  
  height: 60px; 
  border-radius: 50%; 
  margin-bottom: 5px; 
}

li {
  cursor: pointer;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 3px;
  background-color: #edecec;
  transition: background-color 0.3s;
  font-size: 15px;
}

li:hover {
  background-color: #f3eeee;
}

h1{
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline; 
  margin-bottom: 20px;
  font-size: 15px;

}
h4{
  font-size: 15px;
  margin-bottom: 20px;
}
</style>
