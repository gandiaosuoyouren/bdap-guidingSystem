<template>
    <div class="flow-page">
      <div class="flow-template">
        <h2>工作流搭建基本流程</h2>
<<<<<<< HEAD
        <div class="flow-description">
            通过新建项目，填入项目名称以及描述信息，进入搭建页面。在搭建页面可拖动组件到画布，搭建自己的工作流。同时组件点击，右侧属性栏可以填入属性。画布上方的工具栏可以保存、运行、放大缩小画布等。
        </div>
        <div class="flow-steps">
            <div class="flow-step">
                <div class="flow-step-text">登录</div>
                <img src="@/assets/2.png" alt="登录">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">上传实验文件</div>
                <img src="@/assets/3.png" alt="上传实验文件">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">拖拽</div>
                <img src="@/assets/4.png" alt="拖拽">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">设置参数</div>
                <img src="@/assets/5.png" alt="设置参数">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">运行工作流</div>
                <img src="@/assets/6.png" alt="运行工作流">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">储存</div>
                <img src="@/assets/7.png" alt="储存">
            </div>
            <div class="arrow">&#x2193;</div>
            <div class="flow-step">
                <div class="flow-step-text">提交</div>
                <img src="@/assets/8.png" alt="提交">
            </div>
        </div>
    </div>
=======
        <div>通过新建项目，填入项目名称以及描述信息，进入搭建页面。在搭建页面可拖动组件到画布，搭建自己的工作流。同时组件点击，右侧属性栏可以填入属性。画布上方的工具栏可以保存、运行、放大缩小画布等。</div>
        <img src="@/assets/2.png">登录 <div class="arrow">&gt;</div>
        <img src="@/assets/3.png">上传实验文件<div class="arrow">&gt;</div> 
        <img src="@/assets/4.png">拖拽<div class="arrow">&gt;</div> 
        <img src="@/assets/5.png">设置参数<div class="arrow">&gt;</div> 
        <img src="@/assets/6.png">运行工作流<div class="arrow">&gt;</div>
        <img src="@/assets/7.png">储存<div class="arrow">&gt;</div> 
        <img src="@/assets/8.png">提交
      </div>
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
      
    <div class="experiment-flow">
        <div class="experiment-list">
        <h2>具体实验流程</h2>
        <ul>
<<<<<<< HEAD
          <li v-for="(experiment, index) in experiments" :key="index" @click="displayExperiment(index)" class="flow-step-text">
=======
          <li v-for="(experiment, index) in experiments" :key="index" @click="displayExperiment(index)">
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
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
<<<<<<< HEAD
            <video :key="item.video" controls>
              <source :src="require(`@/assets/${item.video}`)" type="video/mp4">
=======
            <video v-if="item.video" controls>
            <source :src="require(`@/assets/${item.video}`)" type="video/mp4">
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
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
<<<<<<< HEAD
=======
             
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
            }]
          },
          {
            name: '决策树实验',
<<<<<<< HEAD
            process: '决策树实验的操作过程...',
            content:[{
              video:'2.mp4',
=======
            process: '实验2的操作过程...',
            content:[{
              image:'10.png',
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
            }]
          },
          {
            name: '关联规则实验',
<<<<<<< HEAD
            process: '关联规则实验的操作过程...',
            content:[{
              video:'3.mp4',
            }]
          },
          {
            name: 'K-means聚类实验',
            process: 'K-means聚类实验的操作过程...',
            content:[{
              video:'4.mp4',
            }]
          },
          {
            name: '在线编程实验',
            process: '在线编程实验的操作过程...',
            content:[{
              video:'5.mp4',
            }]
=======
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
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
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
<<<<<<< HEAD
  .flow-steps {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flow-step {
    width: 500px;
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}
  .flow-step-text {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border-radius: 25px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    width: 70px; /* 固定宽度 */
    height: 30px; /* 固定高度 */
    display: flex; /* 使用 flex 布局 */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    text-align: center; /* 多行文本时居中对齐 */
  }
  .flow-step-text:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

  .flow-template {
=======
  
  .flow-template {
    
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
    margin-right: 200px; /* 可选：添加间距 */
    margin-left: 230px;
    font-size: 15px;
  }
  .flow-template img{
    max-width: 400px;
    max-height: 400px;
<<<<<<< HEAD
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  .flow-step img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}
=======
  }
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
.arrow-wrapper {
  flex: 5 50 200%; /* 设置箭头部分占据的宽度 */
  display: flex;
  justify-content: space-between;
}

.arrow {
  height: 50px;
  width: 50px;
  size: 100px;
<<<<<<< HEAD
  
  line-height: 50px; /* 设置文字垂直居中 */
  text-align: center; /* 设置文字水平居中 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
  font-size: 24px;
  font-size: 36px;
  color: #3498db;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ecf0f1;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  }
  .arrow:hover {
    transform: translateY(5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: #3498db;
    color: white;
  }
=======
  background-color: #e1dede; /* 设置箭头的背景颜色 */
  line-height: 50px; /* 设置文字垂直居中 */
  text-align: center; /* 设置文字水平居中 */
  cursor: pointer; /* 鼠标悬停时显示指针 */
}
>>>>>>> d5a8ee2d51fcad5ee17a33e771b1c221b6e64b8f
  
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
  