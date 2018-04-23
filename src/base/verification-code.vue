<template>
    
        <div class="input-box">
            <input type="text" placeholder="输入短信验证码">
            <a href="javascript:;" @click.stop="sendMessage()">{{word}}</a>
        </div>
</template>

<script>
    export default {
        name:"verification-code",
        data(){
            return {
                word:'获取验证码',
                isOvertime:false
            }
        },
        methods:{
            sendMessage(){
                if(this.isOvertime){
                    return false
                }
                let that = this,
                    time = 60
                this.word = 60+"s"
                var sendTimer = setInterval(function(){
                    that.isOvertime = true
                    time--
                    that.word = time+"s"
                    if(time<0){
                        that.isOvertime = false
                        clearInterval(sendTimer)
                        that.word = "获取验证码"
                    }
                },1000)
            }
        }
    }
</script>

<style scoped>
.input-box{
    overflow: hidden;
}
.input-box input {
  width: 5.8rem;
  vertical-align: middle;
  display: inline-block;
  font-size: 14px;
  line-height: 1;
}
.input-box a {
  width: 2.6rem;
  line-height: 1;
  color: #a3b1bd;
  white-space: normal;
  text-align: right;
  vertical-align: middle;
  display: inline-block;
  float: right;
}
</style>