<script setup lang="ts">
import { } from "vue"
import {useRouter} from 'vue-router'
const router = useRouter()

// router.go(1); 前进
// router.back(); or router.go(-1) 后退


// 编程式导航 不留下历史记录 使用router.replace();

const toPage = (path: string) => {
  // 字符串
  // router.push(path)
  // 对象
  router.push({path:path})
}

const toPage2 = (name: string) => {
  // 命名方式跳转
  router.push({name:name})
}

</script>

<template>
  <h1>路由学习</h1>
  <hr>
  <div>
    <!-- replace 不会留下历史记录 -->
    <router-link replace to="/">登录</router-link>
    <router-link replace to="/reg">注册</router-link>
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

  <h1>编程式导航 -  命名方式跳转</h1>
  <hr>
  <div>
    <button @click="toPage2('Login')">登录</button>
    <button @click="toPage2('Reg')">注册</button>
  </div>
  <RouterView></RouterView>
</template>

<style scoped>
a {
  margin-right: 10px;
}
</style>
