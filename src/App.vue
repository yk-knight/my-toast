<template>
  <div id="app">
    <mytoast :msg="msg" :isShow="true"></mytoast>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      msg:{
        name:"eric",
        speak:"hello"
      }
    }
  }
}
</script>

<style>

</style>
