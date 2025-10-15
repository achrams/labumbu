<script setup>
import Navbar from './components/Navbar.vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="w-full h-full bg-black">
    <Navbar v-if="!route.path.includes('panel')" />
    <router-view></router-view>
  </div>
</template>
