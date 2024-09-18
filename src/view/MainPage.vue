<template>
    <div>
      <LeftNavbar></LeftNavbar>
      <SearchTool></SearchTool>
<<<<<<< HEAD
      
=======
      <img src="@/assets/background.jpg" class="background">
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
    </div>
  </template>
  
  <script>
  import SearchTool from '@/components/main/SearchTool.vue';
  import LeftNavbar from '@/components/main/LeftNavbar.vue';
 
  export default {
    name:"MainPage",
    components: {
        LeftNavbar,
        SearchTool
    },
   
  }
  </script>
  
  <style>
  #app {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.background{
  position: absolute;
  margin-left: 300px;
  margin-top: 100px;
  width: 55vw;
  height: 85vh;
  opacity: 30%;
  z-index: -1;
}


  </style>
  