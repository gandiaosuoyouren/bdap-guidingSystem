<template>
    <div>
      <LeftNavbar></LeftNavbar>
      <SearchTool></SearchTool>
      <img src="@/assets/background.jpg" class="background">
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
  