<template>
    <div class="detail-message">
        <school-header :school="school"></school-header>
        <section>
            <ul class="input-info">
                <li><input type="number" placeholder="输入您的手机号码" id="phoneNum"></li>
                <li>
                    <verification-code></verification-code>
                </li>
                 <li><input type="text" placeholder="输入您的孩子姓名"></li>
                 <li class="last">
                     <select-box select-type="选择与孩子的关系" :select-content="relationName" @isLogFn="selectChildren($event)">
                     </select-box>
                 </li>
            </ul>
        </section>
         <a href="javascript:;" class="common-btn open-btn">开通和教育</a>
         <p class="open-info">和教育资费：<em>10元</em>/月，将从您的手机话费中扣除</p>
         <popup :islogin="relationLogin" title="选择与孩子的关系" :items="relationData" @on-change="relationMessage($event)"></popup>
    </div>
</template>

<script>
    import schoolHeader from "../base/school-header"
    import Popup from "../base/popup"
    import selectBox from "../base/select-box"
    import verificationCode from "../base/verification-code"
    import {save,fetch} from "../assets/js/storage.js"
    export default {
        components:{
            Popup,
            selectBox,
            schoolHeader,
            verificationCode
        },
        data(){
            return{
                school:"",
                relationName:"",
                relationLogin:"false",
                relationData:["爸爸","妈妈","爷爷","奶奶","其他"]
            }
        },
        mounted(){
             this.school = this.$route.params.school
             this.school = fetch("schoolName")
        },
        methods:{
            selectChildren(data){
                if(data === 'log'){
                    this.relationLogin = 'true'
                }
            },
            relationMessage(data){
                this.relationName = data
                this.relationLogin = 'false'
            }
        }
    }
</script>

<style scoped>
.input-info li {
  width: 8.4rem;
  padding: 0.5rem 0;
  margin: 0 auto;
  border-bottom: #e0e0e0 solid 1px;
}
.input-info li.last{
    padding: 0;
    border: none
}
.input-info li input {
  display: inline-block;
  width: 100%;
  font-size: 14px;
  line-height: 1;
  vertical-align: top;
}
.open-info {
  width: 7.5rem;
  line-height: 1.5;
  padding-bottom: 1rem;
  margin: 1rem auto 0;
  font-size: 12px;
  color: #a9a7a8;
  text-align: center;
}
.open-info em {
  color: #ec4525;
}
::-webkit-input-placeholder {
    -webkit-text-security: none;
    color:#000;
    pointer-events: none;
    font-family: "微软雅黑";
}
</style>