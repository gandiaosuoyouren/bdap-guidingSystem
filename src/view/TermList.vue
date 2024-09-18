<template>
    <div class="termlist">
      <img src="@/assets/background.jpg" class="background">
    <h2>BDAP归属于以数据处理为主的计算型云平台，面向广大用户提供“平台即服务”，用户可在允许范围内自由使用平台提供的资源自主构建数据挖掘应用。BDAP平台基于Hadoop、Spark并行框架，使用了批处理、工作流引擎、MongoDB数据库存储等多项相关技术，通过集成PyTorch、JupyterHub等深度学习框架，使用户无需配置复杂环境即可体验多样化数据挖掘服务。</h2>
    <a>主要功能：</a>
    <ul>
        <li v-for="(definition, term) in glossary" :key="term" @click="showDefinition(term)">
          {{ term }}
        </li>
      </ul>
    <div v-if="selectedTerm">
        <h3>{{ selectedTerm }}</h3>
        <p>{{ glossary[selectedTerm] }}</p>
      </div>
  </div>
</template>


<script>


export default {
  data() {
    return {
      
      glossary: {

          文件管理: '提供本地文件导入导出HDFS功能和URL方式导入HDFS功能以及用户对于HDFS中用户私人目录下文件的管理。主要目的是方便用户在本地与分布式文件系统之间传输数据，使得用户自己的数据可以被BDAP平台中的算法所使用，并可以将处理结果导回本地存储查看。',
          数据挖掘: '数据挖掘（Data Mining）是一种从大量数据中发现有价值的模式、规律和知识的过程。它涉及使用计算机技术和统计学原理来自动发现数据中隐藏的模式和关联。数据挖掘是本系统最大的功能模块之一，它包括并行数据挖掘的核心操作。该模块提供了多种ETL组件和数据建模组件，提供流程驱动的使用方式，提供按业务应用或自定义类别的流程管理方式，便于用户进行完整业务的合理切分。',
          深度学习探索:'深度学习是数据挖掘的重要分支，可以学习样本数据的内在规律和表示层次。本系统集成了深度学习技术，提供图形化搭建模型的解决方案，用户无需配置深度学习环境和深度学习框架即可搭建深度学习模型解决问题。深度学习探索模块提供了多种模型层如卷积、池化、正则化层等以及层间数据尺寸的自动计算，用户可自选模型层，通过简单拖拽即可搭建深度学习模型，在设置好参数后就可对模型进行训练和测试。',
          视频关系生成:'视频具有丰富的语义信息，分析视频内容中人物的社交关系可以更好地解释人物的行为和情感，有助于视频内容理解、人物行为预测、目标搜索等任务的发展。本系统基于深度学习实现了视频关系抽取以及对应可视化，在视频关系生成模块中进行展示。为了直观地展示视频人物间错综复杂的关系，选用图结构对其进行表示，其中节点表示视频中出现的人物，节点间的边表示人物间存在的某种关系。随着视频时间轴的移动，视频人物关系图会随之动态变化。',
          图片预处理:'计算机视觉的应用范围与规模是目前人工智能应用中最为广泛与普遍的，且早已深入日常生活与工作的多方面。平台基于深度学习集成几种常见且常用的的图片处理功能，让用户切身感受计算机视觉的威力。',
          在线编程:'BDAP系统中，部署了在线编程模块，可供学生编写简单的python语言程序，并在线执行，返回执行结果。在登录成功后，通过“在线编程”按钮进入在线编程模块。',
          

        },
        selectedTerm: null
    };
  },
  methods: {
    showDefinition(term) {
      this.selectedTerm = term;
    }
    },
}
</script>

<style>
.termlist{
    display: flex;
    flex-direction: column;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    height: 100vh;
    font-size: 20px;
  }

.termlist h2{
  margin-left: 230px;
  font-size: 20px;

}
.termlist h3{
  margin-left: 300px;
  font-size: 20px;
}
.termlist p{
  margin-left: 300px;
  font-size: 15px;
}
</style>
