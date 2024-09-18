<template>
    <div class ="searchtool"> 
      
      <el-popover
        v-model="showPopover"
        placement="bottom-start"
        title="检索结果"
        width="100%"
        height="200px"
        trigger="click"
      @hide="clearResults"
      >
        <template #reference>
        <div class="search-container">
          <el-input v-model="searchKeyword" placeholder="请输入搜索关键词"></el-input>
          <el-button @click="search">搜索</el-button>
        </div>
        </template>
        <ul>
          <li v-for="(result, index) in searchResults" :key="index">
            <router-link :to="result.link">{{ result.title }}</router-link>
          </li>
        </ul>
      </el-popover>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopover: false,
        searchKeyword: '',
        searchResults: [],
        keyword: '',
      };
    },
    methods: {
    search() {
       // 获取用户输入的搜索关键词
      const searchKeyword = this.searchKeyword.trim().toLowerCase(); // 假设搜索关键词不区分大小写
      
      if (searchKeyword === '') {
          // 如果搜索关键词为空，则清空搜索结果
    this.clearResults();
      } else {
    // 根据搜索关键词生成搜索结果
    this.searchResults = this.generateSearchResults(searchKeyword);
  }
},
  generateSearchResults(keyword) {
 
  return [
    { title: `${keyword} ——数据挖掘`, link: '/TermList' },
    { title: `${keyword} ——数据挖掘模块`, link: '/ModuleDisplay' },
    { title: `${keyword} ——数据挖掘`, link: '/RelatedAlgorithm' }
  ];
},
    clearResults() {
      this.searchResults = [];
    },
  
 }
}
  </script>
  
  <style scoped>
  .searchtool {
  position: fixed;
  top: 20px;
  right: 50px;
}

.search-container {
  display: flex;
  align-items: center;
  width: 300px;
}

.searchtool input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 20px;
}

.searchtool button {
  padding: 10px 10px;
  background-color: #67b1fb;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

  </style>
  