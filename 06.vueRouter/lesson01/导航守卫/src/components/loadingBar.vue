<script setup lang="ts">
import {ref} from "vue"


</script>

<template>
  <div class="wraps">
    <div class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
    .wraps {
        position: fixed;
        top:0;
        width: 100%;
        height: 10px;
        .bar {
            height: inherit;
            width:0;
            background: #f00;
        }
    }
</style>
