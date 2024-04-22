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
  <RouterView></RouterView>
</template>

<style scoped>
a {
  margin-right: 10px;
}
</style>
