<script setup lang="ts">
import {} from "vue"
import { useRoute,useRouter } from "vue-router";
// 取值的时候使用useRoute
const route =  useRoute();
const router = useRouter();
</script>

<template>
  <div>
    <button @click="router.back()">返回</button>
    <h1>嘿嘿嘿 我是详情页面</h1>
  </div>

  <h2>query 传参</h2>
  <hr>
  <p>id: {{ route.query.id }}</p>
  <p>name: {{ route.query.name }}</p>
  <p>price: {{ route.query.price }}</p>

  <h2>params 传参</h2>
  <hr>
  <p>id: {{ route.params.id }}</p>
  <p>name: {{ route.params.name }}</p>
  <p>price: {{ route.params.price }}</p>

</template>

<style scoped>
</style>
