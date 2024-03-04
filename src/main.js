import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import Sns from '@/components/sns/sns'
import Update from "@/pages/update/update"
import store from '@/store/index'
// markdown to vue
import MarkdownToVue from '@/components/markdownToVue/markdownToVue.vue'
Vue.config.productionTip = false
Vue.component(Sns.name, Sns)
Vue.component(Update.name, Update)
Vue.component(MarkdownToVue.name, MarkdownToVue)
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
