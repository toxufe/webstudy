<script setup lang="ts">
import {} from "vue"
import { useRoute } from "vue-router";
// 取值的时候使用useRoute
const route =  useRoute();
</script>

<template>
  <h1>嘿嘿嘿 我是详情页面</h1>
  <hr>
  <p>id: {{ route.query.id }}</p>
  <p>name: {{ route.query.name }}</p>
  <p>price: {{ route.query.price }}</p>

</template>

<style scoped>
</style>
