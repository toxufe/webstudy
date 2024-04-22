<script setup lang="ts">
import {} from "vue"


</script>

<template>
  <h1>路由学习</h1>
  <hr>
  <div>
    <router-link to="/">登录</router-link>
    <router-link to="/reg">注册</router-link>
  </div>

    
    <h1>命名式导航</h1>
    <hr>
  <div>
    <router-link :to="{name:'Login'}">登录</router-link>
    <router-link :to="{name:'Reg'}">注册</router-link>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
a {
  margin-right: 10px;
}
</style>
