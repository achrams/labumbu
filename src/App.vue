<script setup>
import CountDown from './components/CountDown.vue';
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="w-full h-full bg-black">
    <CountDown v-if="route.path.includes('hampers')" />
    <Navbar v-if="!route.path.includes('panel')" />
    <router-view></router-view>
  </div>
</template>
