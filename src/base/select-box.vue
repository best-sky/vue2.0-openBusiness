<template>
    <div class="item item-between" @click="selectClick()">
        <p>{{selectType}}<p>
        <div>
            <span class="option">{{selectContent}}</span>
            <i class="arrow"></i>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            selectType: {
                type: String,
                default: "选择所在城市"
            },
            selectContent:{
                type:String,
                default:""
            }
        },
        methods:{
            selectClick(){
                this.$emit('isLogFn','log')
            }
        }
    }
</script>

<style scoped>
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
.item > p {
  color: #000;
  white-space: nowrap;
}
.item > div {
  margin-left: 0.2rem;
}
.remindInfo {
  display: none;
  margin-top: 0.55rem;
  font-size: 12px;
  color: #ec4525;
  text-align: center;
}
.option,
.arrow {
  display: inline-block;
  vertical-align: middle;
}
.option {
  color: #a2afbd;
}
.arrow {
  width: 0.23rem;
  height: 0.46rem;
  margin-left: 0.25rem;
  background: url('../assets/images/arrow.png') no-repeat;
  background-size: contain;
}
</style>