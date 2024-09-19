<template>
  <div class="algorithm-display">

    <div class="algorithm-list">
      <ul>
        <li v-for="(algorithm, index) in modules" :key="index" @click="fetchMetaData(index)">
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
        <!-- <div v-for="(item, index) in selectedalgorithm.content" :key="index">
          <img v-if="item.image" :src="require(`@/assets/${item.image}`)" alt="Algorithm Image" class="image" />
        </div> -->
        <div ref="chart" class="chartContainer"></div>
      </div>
    </div>

  </div>
</template>

<script>
//import NeoVis from 'neovis.js';
import AiAsk from './AiAsk.vue';
import * as echarts from 'echarts';
import axios from 'axios';


export default {
  components: {
    AiAsk
  },
  // mounted() {
  //    this.initChart(); // 初始化ECharts图表
  // },
  data() {
    return {
      modules: [
        {
          name: '数据挖掘',
          endpoint: 'data-mining'
        },
        {
          name: '数据',
          endpoint: 'data'
        },
        {
          name: '数据挖掘主要任务',
          endpoint: 'data-mining-tasks'
        },
        {
          name: '补充知识',
          endpoint: 'supplement-knowledge'
        }
      ],
      selectedalgorithm: null,// 当前选中的模块
      chartInstance: null
    }
  },
  methods: {
    // 初始化图表
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chart);
    },

    // 点击不同按钮后返回不同数据
    async fetchGraphData(endpoint) {
      try {
        const response = await axios.get('http://bdap-cluster-05:3000/api/data-query?name=' + endpoint); // 发送请求到后端
        const graphData = response.data; // 获取返回的图数据
        console.log(graphData)
        // 根据返回的数据渲染图表
        this.renderGraph(graphData);
      } catch (error) {
        console.error('获取图数据失败:', error);
      }
    },
    async fetchMetaData(index) {
      this.selectedalgorithm = this.modules[index];
      this.fetchGraphData(this.modules[index].endpoint)
    },
    // 渲染图表  
    renderGraph(graphData) {
      this.initChart();
      if (!this.chartInstance) {
        console.error("ECharts instance is not initialized");
        return;
      }
      const option = {
        // title: {
        //   text: '知识图谱'
        // },
        tooltip: {
          trigger:'item',
          formatter:function(params){
            const data = params.data;
            if (data.concept) {
                return `<div style="display:blcok;max-width: 200px; word-break:break-all;word-wrap: break-word;white-space:pre-wrap">节点名称: ${data.name}<br>节点说明: ${data.concept}</div>`;
            } else {
                // 如果没有该属性，返回空字符串
                return '';
            }
          },
          
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            data: graphData.nodes,
            links: graphData.relations,
            draggable:true,
            force: {
              repulsion: 200,
              edgeLength: [50, 200],
              // gravity:0.2
            },
            roam: true,
            label: {
              show: true,
              fontSize: 12
            },
            symbolSize:30, 
            edgeLabel: {
              show: true,
              fontSize: 12,
              formatter: '{c}'
            },
            edgeSymbol:['', 'arrow'],
            lineStyle: {
              color: '#999',
              width: 2,
            }
          }
        ]
      };
      console.log(graphData)
      this.chartInstance.setOption(option); // 更新图表
    },
    // displayalgorithm(index) {
    //   this.selectedalgorithm = this.modules[index];
    // }
  }
}
</script>

<style>
.algorithm-list {

  background-color: var(--navbar-color1);
  width: 100%;

  margin-left: 220px;
}

.display-area {
  width: 100%;

  margin-left: 180px;
}

.algorithm-list ul {
  list-style-type: none;
  /* 移除默认项目符号 */
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



.algorithm-details {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  height: 100vh;
  font-size: 20px;


}

h2 {
  margin: 20 auto;
}

/* .algorithm-details img {
  margin-left: 250px;
  max-width: 60%;
  top: -1;

  z-index: -1;

} */
.chartContainer {
  height: 550px;
  width:1000px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  
}
</style>