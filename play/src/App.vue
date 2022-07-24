<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue';
import Icon from '../../packages/components/icon/index';
console.log(Icon);
</script>

<template>
  <w-icon :color="'red'" :size="20"> hello</w-icon>
</template>

<style scoped></style>
