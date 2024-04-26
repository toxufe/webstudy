<script setup lang="ts">
import { } from "vue"
</script>

<template>
  <h1>这是主应用</h1>
  <!-- 子应用 React -->
  <WujieVue name="react" url="http://localhost:5174/"></WujieVue>
  <!-- 子应用 Vue -->
  <WujieVue name="vue" url="http://localhost:5175/"></WujieVue>
</template>

<style lang="scss" scoped></style>
