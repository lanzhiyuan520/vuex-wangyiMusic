// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import filters from './components/tools/filters'
import VueLazyload from 'vue-lazyload'
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]))
Vue.use(VueLazyload, {
    preLoad: 0.5,
    error: '',
    // loading: require('./assets/loading.gif'),
    attempt: 3
})
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
