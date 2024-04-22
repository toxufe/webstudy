<script setup>
import {} from "vue"
</script>

<template>
    <router-view></router-view>
    <hr>
    <h1>我是父路由</h1>
    <router-link style="margin-right: 10px;" to="/">登录</router-link>
    <router-link to="/reg/1">注册</router-link>
</template>

<style scoped></style>
