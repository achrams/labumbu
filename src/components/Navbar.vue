<template>
  <div :class="wrapperClass">
    <div class="w-full md:w-11/12 h-12 lg:h-20 rounded-2xl px-2 lg:px-6 transition-all duration-300">
      <div class="flex w-full h-full items-center justify-between px-4">

        <!-- LOGO -->
        <RouterLink to="/">
          <img :src="logoSrc" alt="logo-labumbu" class="w-20 lg:w-24 h-auto" />
        </RouterLink>

        <!-- NAV DESKTOP -->
        <nav class="hidden md:flex gap-2 text-sm lg:text-base nav-font" :class="navTextColor">

          <RouterLink v-if="showOurBrand" to="/" :class="navItemClass">
            Our Brand
          </RouterLink>

          <RouterLink v-if="!isArtisan" to="/artisan" :class="navItemClass">
            Artisan Salt
          </RouterLink>

          <RouterLink v-if="!isHampers" to="/hampers" :class="[navItemClass, isHampers && activeClass]">
            Hampers
          </RouterLink>

        </nav>

        <!-- MOBILE MENU -->
        <div class="cursor-pointer block lg:hidden w-8" @click="toggleSidebar">
          <img :src="menuIcon" alt="menu-icon" />
        </div>
      </div>
    </div>

    <!-- SIDEBAR -->
    <div v-if="showSidebar" class="fixed top-0 right-0 w-full min-h-screen bg-black/70 backdrop-blur-xs lg:hidden">
      <div class="flex flex-col items-end w-full h-screen text-white">

        <div class="p-4" @click="toggleSidebar">
          <img class="w-11" src="../assets/icon/close-white.png" />
        </div>

        <RouterLink v-if="showOurBrand" @click="closeSidebar" to="/" :class="mobileItemClass">
          Our Brand
        </RouterLink>

        <RouterLink v-if="!isArtisan" @click="closeSidebar" to="/artisan" :class="mobileItemClass">
          Artisan Salt
        </RouterLink>

        <RouterLink v-if="!isHampers" @click="closeSidebar" to="/hampers" :class="mobileItemClass">
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

/* ========================
   STATE
======================== */
const scrollY = ref(0);
const showSidebar = ref(false);

/* ========================
   SCROLL OPTIMIZATION
======================== */
let ticking = false;

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

/* ========================
   ROUTE STATE
======================== */
const path = computed(() => route.path);

const isHome = computed(() => path.value === "/");
const isArtisan = computed(() => path.value === "/artisan");
const isHampers = computed(() => path.value === "/hampers");
const isSample = computed(() => path.value === "/sample");

const isArtisanDetail = computed(() =>
  path.value.includes("/artisan/garam-")
);

const showOurBrand = computed(() =>
  !isHome.value && !isArtisanDetail.value
);

/* ========================
   UI LOGIC
======================== */
const isScrolled = computed(() => scrollY.value > 100);

const wrapperClass = computed(() => [
  isScrolled.value ? "fixed top-0 left-0" : " fixed absolute",
  "w-full h-20 flex justify-center items-center z-50 transition-all duration-300",
  isScrolled.value ? "bg-black/10 backdrop-blur-xs" : "bg-transparent"
]);

const navTextColor = computed(() =>
  (isArtisan.value && !isScrolled.value) || isArtisanDetail.value
    ? "text-black"
    : "text-white"
);

/* ========================
   ASSETS
======================== */
const logoSrc = computed(() =>
  isHome.value ||
    isSample.value ||
    isHampers.value ||
    (isArtisan.value && isScrolled.value)
    ? new URL("../assets/logo/labumbu-putih.png", import.meta.url).href
    : new URL("../assets/logo/labumbu-orange.png", import.meta.url).href
);

const menuIcon = computed(() =>
  isScrolled.value || (!isArtisan.value && !isArtisanDetail.value)
    ? new URL("../assets/icon/menu-white.png", import.meta.url).href
    : new URL("../assets/icon/menu.png", import.meta.url).href
);

/* ========================
   CLASS CONSTANTS
======================== */
const navItemClass =
  "px-2 py-1 text-sm lg:text-xl font-semibold transition hover:scale-105";

const activeClass =
  "underline underline-offset-4 decoration-3 decoration-[#C54827]";

const mobileItemClass =
  "w-full p-4 text-xl text-right font-semibold transition hover:scale-105";

/* ========================
   ACTIONS
======================== */
const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};

const closeSidebar = () => {
  showSidebar.value = false;
};
</script>