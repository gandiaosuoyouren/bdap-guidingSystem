<template>

      <div class="customize-panel">
        <li class="color1">
        <label>全局背景颜色：</label>
        <input type="color" v-model="globalBackgroundColor">
        </li>
        <li class="color2">
            <label>总导航栏颜色：</label>
            <input type="color" v-model="navbarColor">
        </li>
        <li class="color3">
        <label>副导航栏颜色：</label>
        <input type="color" v-model="navbarColor1">
        </li>
        <li>
        <label>字体大小：</label>
        <input type="number" v-model.number="fontSize">
        </li>
      </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        globalBackgroundColor: '', // 存储全局背景颜色
        navbarColor: '', // 存储总导航栏颜色
        navbarColor1:'',// 存储副导航栏颜色
        fontsSize:''
      }
    },
    watch: {
        globalBackgroundColor(newValue) {
            document.documentElement.style.setProperty('--global-background-color', newValue);
    },
        navbarColor(newValue) {
            document.documentElement.style.setProperty('--navbar-color', newValue);
    },
        navbarColor1(newValue) {
            document.documentElement.style.setProperty('--navbar-color1', newValue);
    },    
  },
    methods: {
      saveStyles() {
        localStorage.setItem('customStyles', JSON.stringify({
        backgroundColor: this.backgroundColor,
        fontColor: this.fontColor,
        fontSize: this.fontSize,
      }));
      },
      resetStyles() {
        // 恢复默认样式
        this.backgroundColor = this.defaultStyles.backgroundColor;
        this.fontColor = this.defaultStyles.fontColor;
        this.fontSize = this.defaultStyles.fontSize;

      },
    },
       
       created() {
    // 页面创建时加载本地存储的样式选择
    this.applyStyles();
    }
  }
  </script>
  
  <style>
  .customize-panel{
    margin-left: 230px;
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 10px;
  }
  
  </style>
  