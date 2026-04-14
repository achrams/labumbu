<template>
  <div :class="[
    scrollY > 100 ? 'fixed top-0 left-0' : 'absolute',
    'w-full h-24 flex justify-center items-center z-50 transition-all duration-300',
    navBgClass
  ]">
    <div class="w-full md:w-11/12 h-12 lg:h-20 rounded-2xl px-2 lg:px-6 transition-all duration-300">
      <div class="flex w-full h-full items-center justify-between px-4">
        <!-- LOGO -->
        <RouterLink to="/">
          <img v-if="isHome" src="../assets/logo/labumbu-putih.png" alt="logo-labumbu" class="w-20 lg:w-32 h-auto" />
          <img v-else src="../assets/logo/labumbu-orange.png" alt="logo-labumbu-orange" class="w-20 lg:w-32 h-auto" />
        </RouterLink>

        <!-- NAV -->
        <nav class="text-sm lg:text-base nav-font hidden md:flex gap-2" :class="isHome ? 'text-white' : 'text-black'">
          <!-- Brand Kami -->
          <RouterLink v-if="!isHome && !isArtisanDetail" to="/"
            class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold transition">
            Brand Kami
          </RouterLink>

          <!-- Artisan -->
          <RouterLink v-if="!isArtisan" to="/artisan"
            class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold transition">
            Artisan Salt
          </RouterLink>

          <!-- Hampers -->
          <RouterLink v-if="!isHampers" to="/hampers"
            class="px-2 py-1 hover:scale-105 text-sm lg:text-xl font-semibold transition" :class="{
              'underline underline-offset-4 decoration-3 decoration-[#C54827]':
                isHampers,
            }">
            Hampers
          </RouterLink>
        </nav>
        <div class="cursor-pointer block lg:hidden" @click="toggleSidebar">
          <img src="../assets/icon/menu.png" alt="menu-icon">
        </div>
      </div>
    </div>
    <div class="w-full min-h-screen bg-white absolute top-0 right-0 block lg:hidden" v-if="showSidebar">
      <div class="w-full h-screen flex flex-col items-end">
        <div class="p-4" @click="toggleSidebar">
          <img class="w-5" src="../assets/icon/close.png" alt="close-menu-icon">
        </div>
        <RouterLink @click="showSidebar = false" v-if="!isHome && !isArtisanDetail" to="/"
          class="p-4 hover:scale-105 text-xl text-right font-semibold transition w-full">
          Brand Kami
        </RouterLink>
        <RouterLink @click="showSidebar = false" v-if="!isArtisan" to="/artisan"
          class="p-4 hover:scale-105 text-xl text-right font-semibold transition w-full">
          Artisan Salt
        </RouterLink>
        <RouterLink @click="showSidebar = false" v-if="!isHampers" to="/hampers"
          class="p-4 hover:scale-105 text-xl text-right font-semibold transition w-full" :class="{
            'underline underline-offset-4 decoration-3 decoration-[#C54827]':
              isHampers,
          }">
          Hampers
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const scrollY = ref(0);
const showSidebar = ref(false)

/* ========================
   SCROLL HANDLER
======================== */
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}
/* ========================
   COMPUTED ROUTE STATE
======================== */
const currentPath = computed(() => route.path);

const isHome = computed(() => currentPath.value === "/");
const isArtisan = computed(() => currentPath.value === "/artisan");
const isHampers = computed(() => currentPath.value === "/hampers");
const isSample = computed(() => currentPath.value === "/sample");

const isArtisanDetail = computed(() =>
  currentPath.value.includes("/artisan/garam-")
);

/* ========================
   NAV BACKGROUND LOGIC
======================== */
const navBgClass = computed(() => {
  if (isArtisanDetail.value) return "bg-slate-200 shadow-md duration-75";

  return scrollY.value > 100
    ? "bg-white/90 backdrop-blur-md shadow-md duration-75"
    : "bg-transparent";
});
</script>