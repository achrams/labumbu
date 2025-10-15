<template>
  <div :class="toggleSidebar ? 'w-full md:w-1/5 block' : 'hidden md:block w-1/5'"
    class="h-auto bg-[#C54827] fixed md:relative z-50">
    <div class="w-full h-fit p-4 flex items-center justify-center">
      <img src="../assets/logo/labumbu-putih.png" alt="logo-labumbu" class="w-1/2 h-auto" />
    </div>
    <nav class="w-full">
      <ul class="text-white font-bold font-[FigTree]">
        <li class="px-6 py-3 cursor-pointer focus:border-0 focus:outline-0 hover:bg-[#af4827]"
          :class="true ? 'bg-[#85311a]' : 'bg-none'"><router-link to="/panel/dashboard">Dashboard</router-link></li>
        <li class="px-6 py-3 cursor-pointer focus:border-0 focus:outline-0 hover:bg-[#af4827]"><router-link
            to="/panel/articles">Articles</router-link></li>
        <li class="px-6 py-3 cursor-pointer focus:border-0 focus:outline-0 hover:bg-[#af4827]"><router-link
            to="/panel/recipes">Recipes</router-link>
        </li>
        <li class="px-6 py-3 cursor-pointer focus:border-0 focus:outline-0 hover:bg-[#af4827]" @click="toPage('login')">
          Logout</li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const { toggleSidebar } = defineProps(['toggleSidebar']);

import { useRouter } from 'vue-router';
const router = useRouter();

const toPage = (path) => {
  router.push(path);
};

</script>