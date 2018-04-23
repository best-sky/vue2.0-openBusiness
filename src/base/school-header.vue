<template>  
        <header class="grade-header">
            <div class="school-pic"><img src="../assets/images/school-pic.png"></div>
            <h6>{{school}}</h6>
       </header>   
</template>
<script>
    export default {
        name:'school-header',
        props: {
            school: {
                type: String,
                default: ""
            },
        },
    }
</script>

<style scoped>
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
</style>