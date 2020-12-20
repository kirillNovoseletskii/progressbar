<template>
    <div class="main__referal">
        <h3 class="main__referal-title">
            Referal Link
        </h3>
        <div class="input-group">
            <input class="link-input" v-model="data.referral"/>
            <button class="copy-btn" @click="copyTxt">Copy link</button>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    methods:{
        copyTxt(){
            var txt = this.data.referral;
            this.$clipboard(txt);
        }
    },
    computed: {
        ...mapGetters(["data"]),
    }
}
</script>
<style lang="scss" scoped>
.main__referal{
    width: 100%;
    margin-top: 35px;
    &-title{
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 8px;
    }
    .input-group{
        position: relative;
        width: 100%;
        height: 50px;
    }
    .link-input{
        position: absolute;
        border: 1px solid #E1E6EC;
        background: #F5F7F8 80%;
        font-family: 'Montserrat', sans-serif;
        padding: 13px 12px;
        margin: 0;
        width: 100%;
        &:focus{
            outline: none
        }
    }
    .copy-btn{
        font-size: 15px;
        border: none;
        background: none;
        color: #146EFF;
        right: -12px;
        top: 25%;
        position: absolute;
        &:focus{
            color: #0f4fb6;
            outline: none
        }
    }
}
</style>