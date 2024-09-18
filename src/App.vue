<template>
  <div id="app">
  <MainPage/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <router-view/>
  </div>
</template>

<script>

import MainPage from './view/MainPage.vue';

export default {
components: {
    MainPage,
 
},

  
}

</script>

<style>
#app {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--global-background-color);
}


</style>