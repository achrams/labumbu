<template>
  <div class="w-full h-full flex flex-col bg-[#F2DAC0] relative">
    <div class="bg-gradient-to-b from-[#26190E] via-transparent absolute top-0 w-full h-96"></div>
    <div v-if="recipe" class="w-full h-fit z-30 flex flex-col lg:flex-row">
      <div class="w-full h-fit fixed md:relative pt-12 md:pt-20 duration-150 delay-75"
        :class="currentPosY > 0 ? 'bg-[#F2DAC0] md:bg-transparent' : 'bg-none'">
        <div class="p-4 mt-10">
          <iframe v-if="recipe.video" :src="video_url" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen class="w-full h-52 md:h-96 lg:h-[65vh] rounded-xl shadow-lg"></iframe>
        </div>
      </div>
      <div class="w-full lg:h-[68vh] px-4 overflow-auto mt-80 md:mt-32">
        <div class="h-fit">
          <h3 class="font-[FigTree] font-bold text-2xl md:3xl lg:4xl">INGREDIENTS</h3>
          <ul class="font-[FigTree] text-md md:text-lg lg:text-xl py-4 list-none list-inside">
            <li class="list-disc" v-for="(ing, i) in recipe.ingredients">{{ ing }}</li>
          </ul>
          <h3 class="font-[FigTree] font-bold text-2xl md:3xl lg:4xl">UTENSILS</h3>
          <ul class="font-[FigTree] text-md md:text-lg lg:text-xl py-4 list-none list-inside">
            <li class="list-disc" v-for="(ing, i) in recipe.utensils">{{ ing }}</li>
          </ul>
          <h3 class="font-[FigTree] font-bold text-2xl md:3xl lg:4xl mt-6">CARA MEMBUAT</h3>
          <ul v-if="recipe.instructions" class="font-[FigTree] text-md md:text-lg lg:text-xl list-decimal p-4">
            <li class="list-disc" v-for="(ing, i) in recipe.instructions.split('.').slice(0, -1)">{{ ing }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="absolute w-full h-full top-0 z-0 overflow-hidden">
      <div class="w-full h-fit">
        <div class=" w-full flex justify-between z-0">
          <img src="../assets/bg/lengkap.png" alt="lengkap-kiri" class="z-0">
          <img src="../assets/bg/lengkapkanan.png" alt="lengkap-kanan" class="z-0">
        </div>
        <div class=" w-full flex justify-between z-0">
          <img src="../assets/bg/lengkap2.png" alt="lengkap-kiri-2" class="z-0">
          <img src="../assets/bg/lengkapkanan2.png" alt="lengkap-kanan-2" class="z-0">
        </div>
      </div>
    </div>
    <div class="w-full p-4 z-20">
      <h3 class="font-[FigTree] font-bold text-xl md:text-2xl lg:text-3xl mt-2">
        REKOMENDASI PRODUK
      </h3>
      <!-- Scrollable container -->
      <RecommendedProduct :product-list="recipe.recommendedProducts" />
    </div>
    <div class="w-full h-fit relative">
      <Footer class="z-30" />
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Footer from '@/components/Footer.vue';
import RecommendedProduct from '@/components/RecommendedProduct.vue';
import { useDataStore } from '@/stores';
const route = useRoute();

const currentPosY = ref(null)
const recipeId = ref(null)
const recipe = ref({})
const video_url = ref(null)
const handleScroll = () => {
  currentPosY.value = window.scrollY
}

function convertYoutubeUrl(url) {
  try {
    const parsed = new URL(url);
    let videoId = "";

    if (parsed.hostname.includes("youtu.be")) {
      // format: https://youtu.be/VIDEO_ID
      videoId = parsed.pathname.slice(1);
    } else if (parsed.pathname.startsWith("/shorts/")) {
      // format: https://youtube.com/shorts/VIDEO_ID
      videoId = parsed.pathname.split("/")[2];
    } else if (parsed.searchParams.get("v")) {
      // format: https://www.youtube.com/watch?v=VIDEO_ID
      videoId = parsed.searchParams.get("v");
    }

    videoId ? video_url.value = `https://www.youtube.com/embed/${videoId}` : video_url.value = null;
  } catch (e) {
    video_url.value = null;
  }
}

onMounted(() => {
  window.scrollTo(0, 0);
  recipeId.value = route.params.id;
  useDataStore().fetchRecipeById(route.params.id)
    .then(res => {
      console.log(res)
      recipe.value = res
      convertYoutubeUrl(recipe.value.video)
    })
  window.addEventListener('scroll', handleScroll)
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>