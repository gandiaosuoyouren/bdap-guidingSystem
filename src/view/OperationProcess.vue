<template>
    <div class="flow-page">
      <div class="flow-template">
        <h2>工作流搭建基本流程</h2>
        <div>通过新建项目，填入项目名称以及描述信息，进入搭建页面。在搭建页面可拖动组件到画布，搭建自己的工作流。同时组件点击，右侧属性栏可以填入属性。画布上方的工具栏可以保存、运行、放大缩小画布等。</div>
        <img src="@/assets/2.png">登录 <div class="arrow">&gt;</div>
        <img src="@/assets/3.png">上传实验文件<div class="arrow">&gt;</div> 
        <img src="@/assets/4.png">拖拽<div class="arrow">&gt;</div> 
        <img src="@/assets/5.png">设置参数<div class="arrow">&gt;</div> 
        <img src="@/assets/6.png">运行工作流<div class="arrow">&gt;</div>
        <img src="@/assets/7.png">储存<div class="arrow">&gt;</div> 
        <img src="@/assets/8.png">提交
      </div>
      
    <div class="experiment-flow">
        <div class="experiment-list">
        <h2>具体实验流程</h2>
        <ul>
          <li v-for="(experiment, index) in experiments" :key="index" @click="displayExperiment(index)">
            {{ experiment.name }}
          </li>
        </ul>
        </div>
        <div class="display-area">
        <!-- 显示实验操作过程和图片 -->
        <div class="experiment-details" v-if="selectedExperiment" >
          <h3>{{ selectedExperiment.name }}</h3>
          <p>{{ selectedExperiment.process }}</p>
          <div v-for="(item, index) in selectedExperiment.content" :key="index">
            <img v-if="item.image" :src="require(`@/assets/${item.image}`)" alt="Experiment Image" class="image"/>
            <p v-if="item.text">{{ item.text }}</p>
            <video v-if="item.video" controls>
            <source :src="require(`@/assets/${item.video}`)" type="video/mp4">
            </video>
          </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      experiments: [
          {
            name: '数据预处理实验',
            process: '利用2023年全国空气质量数据集，试图了解一天从0点到23点中每个时间点AQI值的变化情况，以及一年中每天AQI值的变化情况，通过分析这些变化情况来得出一些与空气质量变化有关的结论。',
            content:[{
              video:'1.mp4',
             
            }]
          },
          {
            name: '决策树实验',
            process: '实验2的操作过程...',
            content:[{
              image:'10.png',
            }]
          },
          {
            name: '关联规则实验',
            process: '实验3的操作过程...',
            image: '/path/to/experiment3_image.jpg'
          },
          {
            name: 'K-means聚类实验',
            process: '实验4的操作过程...',
            image: '/path/to/experiment2_image.jpg'
          },
          {
            name: '在线编程实验',
            process: '实验5的操作过程...',
            image: '/path/to/experiment2_image.jpg'
          },
          // 其他实验
        ],
        selectedExperiment: null // 当前选中的实验
      };
    },
    methods: {
      displayExperiment(index) {
        this.selectedExperiment = this.experiments[index];
      }
    }
  };
  </script>
  
  <style>
  .flow-page {
    display: flex;
  }
  
  .flow-template {
    
    margin-right: 200px; /* 可选：添加间距 */
    margin-left: 230px;
    font-size: 15px;
  }
  .flow-template img{
    max-width: 400px;
    max-height: 400px;
  }
.arrow-wrapper {
  flex: 5 50 200%; /* 设置箭头部分占据的宽度 */
  display: flex;
  justify-content: space-between;
}

.arrow {
  height: 50px;
  width: 50px;
  size: 100px;
  background-color: #e1dede; /* 设置箭头的背景颜色 */
  line-height: 50px; /* 设置文字垂直居中 */
  text-align: center; /* 设置文字水平居中 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
  
  .experiment-flow {
   display: inline;
   margin-top: 50px;

  }
  
  .experiment-flow ul {
    display: flex;
    list-style-type: none;
    margin-right: 50px;
  }
  
  .experiment-flow ul li {
    cursor: pointer;
    margin-right: 20px;
    font-size: 15px;
  }
  
  .experiment-details img {
    margin-right: 50px;
    max-width: 100%;
  }

  .experiment-details video{

    margin-right: 50px;
    max-width: 100%;
  }
  </style>
  