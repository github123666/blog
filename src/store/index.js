import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    actions: {
        test() {
            console.log('我是全局action')
        }
    },
})