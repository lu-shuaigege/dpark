// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import $ from 'jquery'

//引入全屏滚动插件
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js/dist/vue-fullpage.js' 
Vue.use(VueFullPage)

// //过滤
// import * as filters from '@/api/filters.js'
// Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

import Api from './api/index.js';
Vue.prototype.$api = Api;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),
})



