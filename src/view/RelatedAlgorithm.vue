<template>
    <div class="algorithm-display">
      
      <div class="algorithm-list">
        <ul>
          <li v-for="(algorithm, index) in modules" :key="index" @click="displayalgorithm(index)">
            {{ algorithm.name }}
          </li>
        </ul>
        <div class="aiask">
          <AiAsk />
        </div>
      </div>
      <div class="display-area">
        <div class="algorithm-details" v-if="selectedalgorithm">
          <h2>{{ selectedalgorithm.name }}</h2>
          <div v-for="(item, index) in selectedalgorithm.content" :key="index">
              <img v-if="item.image" :src="require(`@/assets/${item.image}`)" alt="Algorithm Image" class="image"/>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
//import NeoVis from 'neovis.js';
import AiAsk from './AiAsk.vue';

export default {
  components: {
        AiAsk
    },
    data() {
      return {
        modules: [
        {
            name: '数据挖掘',
            content:[
              {
                image:'49.png',
              },
            ]
          },
          {
            name: '数据',
            content:[
              {
                image:'47.png',
              },
            ]
          },
          {
            name: '数据挖掘主要任务',
            description:'',
            content:[
              {
                image:'48.png',
              },
            ]
          },
          {
            name: '补充知识',
            content:[
              {
                image:'46.png',
              },
            ]
          },
      ],
        selectedalgorithm: null // 当前选中的模块
      }
    },
  methods: {
      displayalgorithm(index) {
        this.selectedalgorithm = this.modules[index];
      }
    }
}
</script>

<style>
.algorithm-list{
    
    background-color:var(--navbar-color1);
    width:100%;
    
    margin-left: 220px;
}

.algorithm-list ul {
    list-style-type: none; /* 移除默认项目符号 */
    padding: 10px; 
    margin: 10px;
    display: flex; 
    flex-wrap: wrap; 

}
  
.algorithm-list li {
    cursor: pointer;
    padding: 5px;
    background-color: #f0f0f0;
    margin-right: 20px; 
    border-radius: 3px;
    
  }
  


.algorithm-details img {
    margin-left: 250px;
    max-width: 60%; 
    top: -1;

    z-index: -1;

  }
  
</style>