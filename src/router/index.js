import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home.vue'
import about from '@/views/about/about.vue'

Vue.use(Router)
export const contentsRouter = [{
  path: '/',
  redirect: 'home',
},
{
  path: '/home',
  name: 'home',
  meta: {
    title: '主页'
  },
  component: () => import('../views/home/home.vue')
},
{
  path: '/about',
  name: 'about',
  meta: {
    title: '关于我们'
  },
  component: () => import('../views/about/about.vue')
},
{
  path: '/newsfocus',
  name: 'newsfocus',
  meta: {
    title: '新闻聚焦'
  },
  component: () => import('../views/news/newsfocus.vue')
},
{
  path: '/newsdetail',
  name: 'newsdetail',
  meta: {
    title: '新闻详情'
  },
  component: () => import('../views/news/newsdetail.vue')
},
{
  path: '/corporateculture',
  name: 'corporateculture',
  meta: {
    title: '企业文化'
  },
  component: () => import('../views/corporate/culture.vue')
},
{
  path: '/contactus',
  name: 'contactus',
  meta: {
    title: '联系我们'
  },
  component: () => import('../views/contactus/contactus.vue')
},{
  path: '/productservice',
  name: 'productservice',
  meta: {
    title: '产品服务'
  },
  component: () => import('../views/product/productservice.vue')
},{
  path: '/naturalresources',
  name: 'naturalresources',
  meta: {
    title: '自然资源空间信息服务解决方案'
  },
  component: () => import('../views/product/naturalresources.vue')
},{
  path: '/surveyservice',
  name: 'surveyservice',
  meta: {
    title: '测绘服务'
  },
  component: () => import('../views/product/surveyservice.vue')
},{
  path: '/dataservice',
  name: 'dataservice',
  meta: {
    title: '数据服务'
  },
  component: () => import('../views/product/dataservice.vue')
},{
  path: '/softwareproduct',
  name: 'softwareproduct',
  meta: {
    title: '软件服务'
  },
  component: () => import('../views/product/softwareproduct.vue')
},{
  path: '/consultingsupervision',
  name: 'consultingsupervision',
  meta: {
    title: '咨询监理'
  },
  component: () => import('../views/product/consultingsupervision.vue')
},{
  path: '/trafficplan',
  name: 'trafficplan',
  meta: {
    title: '智慧交通解决方案'
  },
  component: () => import('../views/product/trafficplan.vue')
},{
  path: '/smartbus',
  name: 'smartbus',
  meta: {
    title: '智慧公交'
  },
  component: () => import('../views/product/smartbus.vue')
},{
  path: '/intelligencemanagement',
  name: 'intelligencemanagement',
  meta: {
    title: '智慧交管'
  },
  component: () => import('../views/product/intelligencemanagement.vue')
},{
  path: '/smarttown',
  name: 'smarttown',
  meta: {
    title: '智慧城镇综合管理解决方案'
  },
  component: () => import('../views/product/smarttown.vue')
},{
  path: '/assetintelligence',
  name: 'assetintelligence',
  meta: {
    title: '资产智能化运营管理平台'
  },
  component: () => import('../views/product/assetintelligence.vue')
},{
  path: '/detail',
  name: 'detail',
  meta: {
    title: '产品详情页'
  },
  component: () => import('../views/product/detail.vue')
},{
  path: '/search',
  name: 'search',
  meta: {
    title: '搜索页'
  },
  component: () => import('../views/search/search.vue')
},{
  path: '/wisdomcommunication',
  name: 'wisdomcommunication',
  meta: {
    title: '智慧'
  },
  component: () => import('../views/product/wisdomcommunication.vue')
},{
  path: '/Intelligentsoft',
  name: 'Intelligentsoft',
  meta: {
    title: '资产智能化运营管理平台-软件产品'
  },
  component: () => import('../views/product/Intelligentsoft.vue')
},{
  path: '/Intelligentproduct',
  name: 'Intelligentproduct',
  meta: {
    title: '资产智能化运营管理平台-服务产品'
  },
  component: () => import('../views/product/Intelligentproduct.vue')
},{
  path: '/Intelligentcase',
  name: 'Intelligentcase',
  meta: {
    title: '资产智能化运营管理平台-经典案例'
  },
  component: () => import('../views/product/Intelligentcase.vue')
},{
  path: '/administrationlaw',
  name: 'administrationlaw',
  meta: {
    title: '行政执法'
  },
  component: () => import('../views/product/administrationlaw.vue')
},{
  path: '/environmentalprotection',
  name: 'environmentalprotection',
  meta: {
    title: '智慧环保'
  },
  component: () => import('../views/product/environmentalprotection.vue')
},{
  path: '/trafficengineering',
  name: 'trafficengineering',
  meta: {
    title: '交通工程'
  },
  component: () => import('../views/product/trafficengineering.vue')
},{
  path: '/trafficplanning',
  name: 'trafficplanning',
  meta: {
    title: '交通规划'
  },
  component: () => import('../views/product/trafficplanning.vue')
}
]




export default new Router({
  // routes,
  // mode:"hash",
  mode:"history",
  routes: contentsRouter,

  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
