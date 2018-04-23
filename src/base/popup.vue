<template>
    <div ref="login" class="popUp" v-show="isLogin">
        <div>
            <h6>{{title}}</h6>
            <ul>
                <li v-for="(item,index) in items" :key="index" :class="{checked:index===nowIndex}" @click="selectItem(index)">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showFlag:false,
                nowIndex:0
            }
        },
        props: {
            title: {
                type: String,
                default: "选择地市"
            },
            items:{
                type:Array,
                default:[]
            },
            islogin:{
                type:String,
                default:"false"
            }
        },
        methods:{
            selectItem(index){
                this.nowIndex = index
                this.$emit("on-change",this.items[index])
            },
            hide(){
                this.showFlag = false
            }
        },
        computed:{
            isLogin (){
                if(this.islogin == 'true'){
                    return true
                } else {
                    return false
                }
            }
        }
    }
</script>

<style scoped>
.popUp {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
.popUp > div {
  width:80%;
  max-height:400px;
  background: #fff;
  border-radius: 3px;
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.popUp > div > h6 {
  line-height: 1.3rem;
  font-size:0.8rem;
  color: #0a8c16;
  text-align: center;
}
.popUp > div li {
  width: 100%;
  height: 1.2rem;
  line-height: 1.2rem;
  padding-left: 0.55rem;
  padding-right: 1.1rem;
  border-bottom: #e0e0e0 solid 1px;
  color: #888888;
  position: relative;
  text-align: left
}
.popUp > div li:last-of-type {
  border: none;
}
.popUp > div li:after {
  content: '';
  display: block;
  width: 0.46rem;
  height: 0.46rem;
  background: url('../assets/images/check.png') no-repeat;
  background-size: contain;
  position: absolute;
  top: 50%;
  right: 0.55rem;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.popUp > div li.checked:after {
  background: url('../assets/images/checked.png');
  background-size: contain;
}
</style>