<script setup lang="ts">
import {} from "vue"
import {data} from './list.json'
import { useRoute,useRouter } from "vue-router";
// 取值的时候使用useRoute
const route =  useRoute();
// console.log('route: ', route);
const router = useRouter();

// const state = history.state

const props = defineProps<{id:number}>();
// console.log('props: ', props);

const item = data.find(v => v.id === Number(props.id))
console.log('data: ', data);
console.log('item: ', item);
</script>

<template>
  <div>
    <button @click="router.back()">返回</button>
    <h1>嘿嘿嘿 我是详情页面</h1>
  </div>

  <!-- <h2>query 传参</h2>
  <hr>
  <p>id: {{ route.query.id }}</p>
  <p>name: {{ route.query.name }}</p>
  <p>price: {{ route.query.price }}</p> -->

  <!-- <h2>params 传参</h2>
  <hr>
  <p>id: {{ state.id }}</p>
  <p>name: {{ state.name }}</p>
  <p>price: {{ state.price }}</p> -->

<!-- <h2>动态路由参数</h2>
<hr>
  <p>id: {{ route.params.id }}</p>
  <p>name: {{ route.params.name }}</p>
  <p>price: {{ route.params.price }}</p> -->


  <h2>动态路由参数 通过props 传递参数</h2>
  <hr>
  <p>id: {{id }}</p>
  <p>name: {{ item?.name }}</p>
  <p>price: {{ item?.price }}</p>


</template>

<style scoped>
</style>
