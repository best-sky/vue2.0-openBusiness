import Vue from "vue"
import Router from "vue-router"
import joinIndex from "../components/join-index"
import selectGrade from "../components/select-grade"
import detailMessage from "../components/detail-message"
import "../assets/css/reset.css"
import "../assets/js/flexible.js"
Vue.use(Router)

export default new Router({
    routes:[
        {
            path:"/",
            component:joinIndex
        },
        {
            path:"/join-index",
            name:"joinIndex",
            component:joinIndex
        },
        {
            path:"/select-grade",
            name:"selectGrade",
            component:selectGrade
        },
        {
            path:"/detail-message",
            name:"detailMessage",
            component:detailMessage
        },
        {
            path:"*",
            redirect:joinIndex
        }
    ]
})