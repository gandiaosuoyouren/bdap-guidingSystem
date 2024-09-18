<template>
    <div class="module-display">
      <!-- 左侧模块名称列表 -->
      <div class="module-list">
        <ul>
          <li v-for="(module, index) in modules" :key="index" @click="displayModule(index)">
            {{ module.name }}
          </li>
        </ul>
      </div>
      <!-- 右侧展示区域 -->
      <div class="display-area">
        <div class="module-details" v-if="selectedModule">
          <h2>{{ selectedModule.name }}</h2>
          <p>{{ selectedModule.description }}</p>
          <div v-for="(item, index) in selectedModule.content" :key="index">
          <img v-if="item.image" :src="require(`@/assets/${item.image}`)" alt="Module Image" class="image"/>
          <p v-if="item.text">{{ item.text }}</p>
        </div>
      </div>
    </div>
    </div>
  </template>

  

  <script>
  export default {
    data() {
      return {
        modules: [ // 模块列表
          {
            name: '文件系统',
            description: '文件系统包括私有文件目录和公有文件目录，储存实验文件夹和相关数据。',
            content:[{
              image:'10.png',
              text:'同时可以在文件系统中上传文件和新建文件夹',
            },
            {
              
              image:'12.png'
              
            },
            {
              image:'13.png',
              text:'点击返回根目录',
            }, 
            {
             
              image:'14.png'
            }
          ]
          },
          {
            name: '工作流搭建模块',
            description: '工作流搭建模块可以进行私有工作流和示例的查看、工作流的新建、修改和删除。私有工作流即为用户搭建的工作流，当我们完成实验时，可在对应工作流中找到实验过程和结果。',
            content:[
              {
                image:'15.png',
                text:'当我们使用平台进行实验时，首先要搭建工作流。',
              },
              {
                image:'16.png',
                text:'可以对已创建的工作流信息进行修改和删除。'
              },
              {
                image:'17.png',
              },
              {
                image:'18.png',
                text:'在运行工作流时，点击上方指示栏的网格可以查看运行状态，包括运行中、等待和完成状态。'
              },
              {
                image:'45.png',
              },
              {
                image:'43.png',
                text:'其他标识分别表示存储、运行、终止，也可以放大和缩小画布。'
              },
              {
                image:'42.png',
                text:'工作流运行完成后，可以点击查看数据可视化展示，如：'
              },
              {
                image:'44.png'
              }
            ],
          },

          {
            name: '算法案例模块',
            description: '算法案例模块给出了一些常用的算法介绍及案例，更加详细的算法知识将在相关算法中给出。',
            content:[
              {
                image:'19.png',
              },
            ]
          },
          {
            name: '在线编程模块',
            description: '该模块使用了Jupyter进行在线编程，它一种是基于网页形式的，包含了数学公式、交互技术、富媒体等多种开发工具的应用程序。允许用户创建和共享包含实时代码、方程、可视化和说明文本的文档。Jupyter里面编写的内容都可以以文档形式输出，默认保存的后缀名为.ipynb的JSON格式文件，还可以导出为：HTML、PDF、MarkDown、Python等格式。',
            content:[
              {
                image:'35.png',
              }
            ]
          },
          {
            name: '数据挖掘模块',
            description: '此模块是大数据分析与挖掘实验最常用到的模块，其中包括多种数据处理和机器学习的工具，用户可以在此模块进行数据挖掘和评估，找寻数据之间的关联关系。',
            content:[
              {
                image:'36.png',
                text:'可选择多种数据源进行分析，包括公有文件和私有文件中的数据，也可以从数据库中直接获得数据'
              },
              {
                image:'37.png',
                text:'载入数据后，首先使用多种方法对数据进行处理，如分组、排序等'
              },
              {
                image:'39.png',
                text:'之后进行机器学习操作和数据可视化展示'
              },
              {
                image:'40.png',
              },
              {
                image:'38.png',
                text:'也可以进行数据评估，或利用训练好的数据集进行操作'
              },
              {
                image:'41.png'
              }
            ]
          },
          {
            name: '复杂网络分析模块',
            description: '可在此模块中进行多种图和网络的挖掘分析和测试,深度网络分析模块与此相似',
            content:[
              {
                image:'20.png',
                text:'挖掘方法如下：'
              },
              {
                image:'21.png',
                text:'可以对结果进行文字和图标形式的展示和测试'
              },
              {
                image:'22.png'
              }
            ]
          },
          {
            name: '视频人物关系生成模块',
            description: '此模块可以对视频中的人物关系进行分析，并生成知识图谱进行展示。',
            content:[
              {
                image:'23.png',
              },
            ]
          },
          {
            name: '社交网络分析模块',
            description: '此模块可以对视频进行详细分析，不仅可以生成人物关系，还可以识别视频人物，抽取人脸特征，并对视频进行分镜抽帧和人脸聚类',
            content:[ 
              {
                image:'24.png',
                text:'当我们上传视频后，可以提交视频处理任务，此时将会首先显示视频信息'
              },
              {
                image:'25.png',
              },
              {
                image:'29.png',
                text:'后续可以进行人物的识别和特征抽取，将结果以自动轮播的形式显示。'
              },
              {
                image:'30.png'
              },
              {
                image:'31.png',
                text:'之后，视频将根据各个分镜进行抽帧，将不同分镜的抽帧结果放于文件夹中。'
              },
              {
                image:'32.png',
                
              },
              {
                image:'26.png',
                text:'并识别视频中的不同人脸进行聚类'
              },
              {
                image:'33.png'
              },
              {
                image:'27.png',
                text:'最后生成人物关系网络'
              },
              {
                image:'28.png'
              }

            ]
          },
          {
            name: '诗图互配模块',
            description: '当我们输入诗句时，可根据诗中的关键词匹配相关图片,同理输入图片也可生成有关诗词',
            content:[
              {
                image:'34.png',
               
              }
            ]
          },
          
         
          
          // 其他模块
        ],
        selectedModule: null // 当前选中的模块
      };
    },
    methods: {
      displayModule(index) {
        this.selectedModule = this.modules[index];
      }
    }
  };
  </script>
  
  <style>
  .module-display {
    display: flex;
    
  }
  
  .module-list {
    position: fixed;
    height: 100%;
    flex: 1;
    background-color:var(--navbar-color1);
    width:230px;
    margin-left: 220px;
    
  }
  
  .module-list ul {
    list-style-type: none;
    padding: 0;
    margin: 10px;
    margin-top: 50px;
    font-size: 15px;
    border-radius: 20;
  }
  
  .module-list li {
    cursor: pointer;
    padding: 10px;
    margin: 7px 0;
    background-color: #f0f0f0;
    
  }
  
  .module-list li:hover {
    background-color: #ccc;
    
  }
  
  .display-area {
    flex: 3;
    padding: 20px;
  }
  
  .module-details img {
    margin-left: 500px;
    max-width: 40%; /* 图片最大宽度为父元素宽度的60% */
    height: auto;
  }
  
  .module-details h2 {
    margin-top: 30px;
    font-size: 20px;
    margin-left: 500px;
  }
  
  .module-details p {
    margin-top: 15px;
    font-size: 15px;
    margin-left: 500px;
    word-wrap: break-word;
  }
  </style>
  