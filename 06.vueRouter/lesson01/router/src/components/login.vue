<script setup lang="ts">
import {} from "vue"
import {data} from './list.json'
</script>

<template>
<h1>嘿嘿嘿我是列表页面</h1>

<table id="table">
  <thead>
    <tr>
      <th>id</th>
      <th>品牌</th>
      <th>价格</th>
      <th>操作</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="item in data" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td><button>详情</button></td>
    </tr>
  </tbody>
</table>
</template>

<style scoped>
#table{
  width: 60vw;
}

#table tr th{
  background-color: #f0f0f0;
  border: 1px solid #ccc;
}

#table tr td{
  border: 1px solid #ccc;
  text-align: center;
}
</style>
