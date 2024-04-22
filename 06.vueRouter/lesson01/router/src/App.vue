<script setup lang="ts">
import { } from "vue"
import {useRouter} from 'vue-router'
const router = useRouter()

const toPage = (path: string) => {
  // 字符串
  router.push(path)
}

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
    <router-link :to="{ name: 'Login' }">登录</router-link>
    <router-link :to="{ name: 'Reg' }">注册</router-link>
  </div>

  <h1>编程式导航</h1>
  <hr>
  <div>
    <button @click="toPage('/')">登录</button>
    <button @click="toPage('/reg')">注册</button>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
a {
  margin-right: 10px;
}
</style>
