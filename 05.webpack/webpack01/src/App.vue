<script setup lang="ts">
import { ref } from 'vue'
import moment from 'moment'
const count = ref<number>(0)
</script>

<template>
  <div class="">{{ count }}</div>
  <button @click="count++">+1</button>

  <div>{{ moment().format('YYYY-MM-DD HH:mm:ss') }}</div>

</template>

<style lang="scss">

$red: #f00;
$yellow:yellow;
html,body {
  // background: $red;
  button {
    background: $yellow;
    border: none;
  }
}
</style>
