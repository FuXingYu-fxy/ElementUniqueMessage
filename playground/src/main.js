import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')