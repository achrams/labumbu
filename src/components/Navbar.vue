<template>
  <div class="absolute w-full h-24 lg:h-36 flex justify-center items-center z-50">
    <div class="w-full md:w-11/12 h-12 lg:h-20 rounded-2xl px-2 lg:px-6 duration-150 delay-75"
      :class="scrollY > 50000 ? 'bg-black/70' : 'bg-transparent'">
      <div class="flex w-full h-full items-center justify-between px-4">
        <img v-if="currentPath === '/'" src="../assets/logo/labumbu-putih.png" alt="logo-labumbu"
          class="w-20 lg:w-32 h-auto">
        <img v-else src="../assets/logo/labumbu-orange.png" alt="logo-labumbu-orange" class="w-20 lg:w-32 h-auto">
        <div>
          <nav class="text-sm lg:text-base nav-font" :class="currentPath == '/' ? 'text-white' : 'text-black'">
            <RouterLink to="/" v-if="currentPath !== '/'"
              class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold focus:outline-none focus:ring-0"
              @click="setPath('/')"
              :class="{ 'underline underline-offset-4 decoration-3 decoration-[#C54827]': currentPath === '/' }">
              Brand Kami
            </RouterLink>
            <RouterLink to="/artisan"
              class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold focus:outline-none focus:ring-0"
              @click="setPath('/artisan')"
              :class="{ 'underline underline-offset-4 decoration-3 decoration-[#C54827]': currentPath === '/artisan' }">
              Artisan Salt
            </RouterLink>
            <!-- <RouterLink to="/articles"
              class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold focus:outline-none focus:ring-0"
              @click="setPath('/articles')"
              :class="{ 'underline underline-offset-4 decoration-3 decoration-[#C54827]': currentPath === '/articles' }">
              Jelajahi Cerita
            </RouterLink> -->
            <!-- <RouterLink
              :class="{ 'underline underline-offset-4 decoration-3 decoration-[#C54827] focus:outline-none focus:ring-0': currentPath.includes('recipes') }"
              to="/recipes" class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold"
              @click="setPath('/recipes')">Resep
            </RouterLink> -->
            <!-- <RouterLink
              :class="{ 'underline underline-offset-4 decoration-3 decoration-[#C54827] focus:outline-none focus:ring-0': currentPath === '/blog' }"
              to="/blog" class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold hidden md:inline"
              @click="setPath('/blog')">
              Blog
            </RouterLink> -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const scrollY = ref(0)
const currentPath = ref('/')

const setPath = (val) => {
  currentPath.value = val
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  console.log(route)
  setPath(route.path)
  currentPath.value = route.path
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, (newPath) => {
  setPath(newPath)
}, { immediate: true })
</script>