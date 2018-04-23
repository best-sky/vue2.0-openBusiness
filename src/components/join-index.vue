<template>
    <div class="index">
        <header class="common-header">
            <div class="logo"></div>
            <h3>亲，欢迎加入安徽和教育～</h3>
            <h4>请按照页面提示操作，即可加入班级，<br>享受和教育服务。</h4>
        </header>
        <section class="area">
            <select-box select-type="选择所在城市" :select-content="cityName" @isLogFn="selectClick($event)">
            </select-box>
            <div class="item item-between">
                <input v-model="school" type="text" id="belong_school" placeholder="输入所在学校">
                <a href="javascript:;" class="search" @click="openLogin()"></a>
            </div>
            <p class="remindInfo" v-show="!schoolData.length">未查到您要找的学校</p>   
        </section>
        <router-link :to="{ name: 'selectGrade', params: { school:this.school}}" class="common-btn footer-btn">下一步</router-link>
        <p class="tips">仅限安徽移动手机用户开通</p>
        <popup :islogin="login" title="选择地市" :items="cityData" @on-change="selectCity($event)"></popup>
        <popup :islogin="schoolLogin" title="选择学校" :items="schoolData" @on-change="selectSchool($event)"></popup>
    </div>
</template>

<script>
    import Popup from "../base/popup"
    import selectBox from "../base/select-box"
    import {save,fetch} from "../assets/js/storage.js"
    export default {
        components:{
            Popup,
            selectBox
        },
        data(){
            return{
                cityName:"合肥市",
                school:"",
                schoolData:["长江路第一小学","长江路第二小学","长江路第三小学","长江路第四小学"],
                cityData:["合肥市","马鞍山市","宿州市","六安市"],
                login:'false',
                schoolLogin:'false'
            }
        },
        methods:{
            selectClick(data){//selectBox组件事件
                if(data ==='log'){
                    this.login = 'true'
                }
            },
            selectCity(data){//popup组件的事件
              this.cityName = data
              save("cityName",this.cityName)
              this.login = 'false'
            },
            selectSchool(data){
               this.school = data
               save("schoolName",this.school)
               this.schoolLogin = 'false'
            },
            openLogin(){
               this.schoolLogin = 'true' 
            }
        },
        beforeRouteLeave (to, from, next) {  //路由离开的时候进行判断  
            if(this.school == ""){
              alert("请选择学校")
              next(false)
            } else {
              next()
            }
        },
        mounted(){
          this.school = fetch("schoolName");
        }
    }
</script>

<style scoped>
.common-header {
  padding: 1.2rem 0 1.7rem;
}
.common-header > h3 {
  margin-top: 1rem;
  font-size: 16px;
  color: #0a8c16;
  text-align: center;
}
.common-header > h4 {
  margin-top: 0.4rem;
  line-height: 1.5;
  font-size: 13px;
  color: #a9a7a8;
  text-align: center;
}
.grade-header {
  padding: 1.4rem 0 1.2rem;
}
.grade-header > h6 {
  margin-top: 0.7rem;
  font-size: 16px;
  color: #0a8c16;
  text-align: center;
}
.logo {
  width: 3.92rem;
  height: 0.93rem;
  margin: 0 auto;
  background: url('../assets/images/logo.png') no-repeat;
  background-size: contain;
}
.school-pic {
  width: 5.28rem;
  height: 5.28rem;
  margin: 0 auto;
  border-radius: 2.64rem;
  overflow: hidden;
}
.school-pic img {
  width: 100%;
  height: 100%;
}
.area {
  padding: 0 1.2rem;
}
.item {
  width: 100%;
  padding: 0.5rem 0;
  border-bottom: #e0e0e0 solid 1px;
  overflow: hidden;
}
.item.item-between {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.item > div {
  margin-left: 0.2rem;
}
.item input {
  display: inline-block;
  width: 7.6rem;
  line-height: 1;
  font-size: 14px;
  color: #000;
  vertical-align: middle;
}
.search {
  display: inline-block;
  width: 0.55rem;
  height: 0.55rem;
  margin-left: 0.25rem;
  background: url('../assets/images/search.png') no-repeat;
  background-size: contain;
  vertical-align: middle;
}
.tips {
  width: 100%;
  position: absolute;
  top: 16.7rem;
  font-size: 12px;
  color: #0a8c16;
  text-align: center;
}
</style>