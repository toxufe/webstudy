<script setup lang="ts">
import 'animate.css';
import {} from "vue"
// import loadingBar from '@/components/loadingBar.vue'
</script>

<template>
  <!-- <loadingBar /> -->
  <!-- <h1>导航守卫</h1>
  <hr> -->
 <router-view #default="{route,Component}">
  <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
    <component :is="Component" />
  </transition>
 </router-view>
</template>

<style>

* {
  margin: 0;
  padding: 0;
}
html,body,#app {
  height: 100%;
  overflow: hidden;
}
</style>
