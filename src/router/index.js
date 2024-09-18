import Vue from 'vue'
import VueRouter from 'vue-router'
import LoadPage from '@/components/LoadPage'
import ChangePage from '@/components/ChangePage'
import ModuleDisplay from '@/view/ModuleDisplay'
import RelatedAlgorithm from '@/view/RelatedAlgorithm'
import TermList from '@/view/TermList';
import OperationProcess from '@/view/OperationProcess'


Vue.use(VueRouter);

const routes =[
   {path:'/',
   name:'LoadPage',
   component:LoadPage},

   {path: '/MainPage', 
   name:'MainPage',
   component: () => import('../view/MainPage.vue')
 },
 {path: '/TermList', 
  name:'TermList',
  component: TermList
  },
  
  {path: '/ModuleDisplay', 
  name:'ModuleDisplay',
  component: ModuleDisplay
  },
  {path: '/RelatedAlgorithm', 
   name:'RelatedAlgorithm',
   component: RelatedAlgorithm
  },
  {path: '/OperationProcess', 
  name:'OperationProcess',
  component: OperationProcess
  },
  {path: '/ChangePage', 
   name:'ChangePage',
   component: ChangePage},
  

];

const router = new VueRouter({
      mode: 'history', // 使用 HTML5 History 模式，需要后端服务器支持
      base: process.env.BASE_URL,
      routes,
    });

export default router;
