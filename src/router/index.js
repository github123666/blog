import VueRouter from 'vue-router'
import Vue from 'vue'
import data from "@/assets/route.json"
let routes = []
data.forEach(element => {
    if (element.component) {
        let test = element.component
        element.component = () => import(`@/pages${test}`)
    }
    routes.push(element)
});
Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes,
    //默认路由跳转时滚到顶部
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
})
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'breakme.tk'
    next()
})
export default router