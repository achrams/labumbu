<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-[#F2DAC0] relative">
    <div v-if="article" class="w-full h-fit mt-32">
      <img src="../assets/bg/ceritadetail.png" :alt="article.slug" class="w-full">
      <div class="w-full p-8 flex flex-col items-center justify-center">
        <div class="w-full md:w-2/3 text-center">
          <h1 class="text-2xl md:text-5xl">
            {{ article.title }}
          </h1>
        </div>
        <div class="mt-24">
          {{ article.contents[0] }}
        </div>
      </div>
    </div>
    <!-- Not Found -->
    <div v-else class="w-full h-screen flex flex-col items-center justify-center">
      <h1>Not Found.</h1>
      <button class="text-blue-500 underline cursor-pointer" @click="router.back()">Go Back</button>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import RecommendedProduct from '@/components/RecommendedProduct.vue';
import RecommendedRecipe from '@/components/RecommendedRecipe.vue';
import { useDataStore } from '@/stores';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useDataStore();
const router = useRouter();
const slug = useRoute().params.id;
const article = ref({});
const showAll = ref(false)
// Scroll + Drag
import contoh from '../assets/bg/cerita.png'

const articlesData = [
  {
    id: 1,
    title: "Panas dan Terik Matahari Adalah Bahagia Mereka",
    slug: "garam-amed",
    contents: ['Dari pagi buta, setiap harinya kita akan mendapati para petani garam di Amed sudah bergerilya, mempersiapkan tempat untuk menampung air laut.'],
    image: contoh,
    createdAt: new Date()
  },
  {
    id: 2,
    title: "Dari Jemari yang Menggarami Waktu",
    slug: "garam-kusamba",
    contents: ['Di tepi pantai Kusamba, sebelum fajar menyingsing, para petani garam sudah menyapa laut dengan membawa harapan untuk kehidupan. '],
    image: contoh,
    createdAt: new Date()
  },
]

onMounted(() => {
  window.scrollTo(0, 0);
  // store.fetchArticleById(id).then((data) => {
  //   article.value = data;
  // });
  article.value = articlesData.find(art => art.slug === slug)
  console.log(article.value)
});
</script>
