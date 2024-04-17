<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="">{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<style scoped></style>
