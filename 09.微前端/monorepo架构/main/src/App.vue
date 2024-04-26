<script setup lang="ts">
import { } from "vue"
</script>

<template>
  <h1>这是主应用</h1>
  <!-- 子应用 React -->
  <WuJieVue name="react" url="http://localhost:5174/"></WuJieVue>
  <!-- 子应用 Vue -->
  <WuJieVue name="vue" url="http://localhost:5175/"></WuJieVue>
</template>

<style lang="scss" scoped></style>
