<template>
    <div class="vue-toast-wraper" v-show="showmsg">
        {{msg.name}}:{{msg.speak}}
    </div>
</template>

<script>
export default {
    name:'mytoast',
    data(){
        return{
            showmsg:this.isShow
        }
        
    },
    props:{
        msg:{
            type:Object,
            default:function() {
                return {
                    name:"",
                    speak:""
                }
            }
        },
        isShow:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        cutMsg:function(show) {
            return this.isShow
                
            
        }
    },
    mounted() {
        if(this.isShow){
            setTimeout(() => {
                this.showmsg = false
            },2500);
        }
    }
}
</script>

<style scoped>
    .vue-toast-wraper{
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-size: 17px;
        padding: 10px;
        border-radius:12px;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 2000;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
    }
</style>