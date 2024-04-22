<script setup lang="ts">
import {} from "vue"
import { useRouter } from "vue-router";
import {data} from './list.json'

const router = useRouter();

type Item = {
  name: string;
  price: string;
  id: number;
}
/**
 * query 传参是在url上显示的
 * createWebHashHistory 模式下会在url上显示参数
 * 
 * params 传参是在url上不显示的 数据存在内存中
 */

const toDetail = (item: Item) => {
  // query只能传递对象
  // router.push({
  //   path: '/reg',
  //   query: item
  // })

  // params可以传递字符串 vue 已经取消该方式

  // state可以传递对象
  router.push({
    name: 'Reg',
    state: item
  })
}



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
      <td><button @click="toDetail(item)">详情</button></td>
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
