<template>
    <div class="select-grade">
        <school-header :school="school"></school-header>
        <section class="area">
                <select-box select-type="选择年级" :select-content="gradeName" @isLogFn="selectGrade($event)">
                </select-box>
                <select-box select-type="选择班级" :select-content="className" @isLogFn="selectClass($event)">
                </select-box>
        </section>
        <router-link :to="{ name: 'detailMessage', params: { school:this.school}}" class="common-btn footer-btn">下一步</router-link>
        <popup :islogin="gradeLogin" title="选择年级" :items="gradeData" @on-change="gradeMessage($event)"></popup>
        <popup :islogin="classLogin" title="选择班级" :items="classData" @on-change="classMessage($event)"></popup>
    </div>
</template>

<script>
    import Popup from "../base/popup"
    import selectBox from "../base/select-box"
    import schoolHeader from "../base/school-header"
    import {save,fetch} from "../assets/js/storage.js"
    export default {
        components:{
            Popup,
            selectBox,
            schoolHeader
        },
        data(){
            return {
                school:"",
                gradeName:"",
                className:"",
                gradeLogin:'false',
                classLogin:'false',
                gradeData:["一年级","二年级","三年级","四年级","五年级","六年级"],
                classData:["一班","二班","三班","四班","实验班",]
            }
        },
        methods:{
            selectGrade(data){
                if(data === 'log'){
                    this.gradeLogin = 'true'
                }
            },
            selectClass(data){
                if(data === 'log'){
                    this.classLogin = 'true'
                }
            },
            gradeMessage(data){
                this.gradeName = data
                save("gradeName",this.gradeName)
                this.gradeLogin = 'false'
            },
            classMessage(data){
                this.className = data
                save("className",this.className)
                this.classLogin = 'false'
            }
        },
        mounted(){
             this.school = this.$route.params.school
             this.school = fetch("schoolName");
             this.gradeName = fetch("gradeName")
             this.className = fetch("className")
        },
        beforeRouteLeave (to, from, next) {  //路由离开的时候进行判断  
            if(this.gradeName == "" ||this.className == ""){
              alert("请选择完整的信息")
              next(false)
            } else {
              next()
            }
        }
    }
</script>

<style scoped>
    .area {
        padding: 0 1.2rem;
    }
</style>