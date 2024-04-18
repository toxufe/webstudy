<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)
</script>

<template>
  <div class="">{{ count }}</div>
  <button @click="count++">+1</button>
</template>

<style lang="scss">

$red: #f00;
$yellow:yellow;
html,body {
  background: $red;
  button {
    background: $yellow;
    border: none;
  }
}
</style>
