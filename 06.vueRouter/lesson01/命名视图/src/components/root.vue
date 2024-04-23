<script setup lang="ts">
import {} from "vue"
</script>

<template>

<h1>Root</h1>
<hr>
<router-link to="/user1">默认的命名视图</router-link>
<router-link style="margin-left: 20px;" to="/user2">起小名的命名视图</router-link>
<router-view></router-view>
<router-view name="bbb"></router-view>
<router-view name="ccc"></router-view>
</template>

<style scoped></style>
