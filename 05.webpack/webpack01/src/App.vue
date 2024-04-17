<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)
</script>

<template>
  <div class="">{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<style>
html,body {
  background: green;
}
</style>
