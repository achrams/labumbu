<script setup>
import Footer from '@/components/Footer.vue'
import { useDataStore } from '@/stores'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const store = useDataStore();
const router = useRouter()
const toPage = (val) => {
  router.push(val)
}

import contoh from '../assets/bg/cerita.png'

const articleList = [
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
  {
    id: 3,
    title: "Dari Jemari yang Menggarami Waktu",
    slug: "garam-kusamba",
    contents: ['Di tepi pantai Kusamba, sebelum fajar menyingsing, para petani garam sudah menyapa laut dengan membawa harapan untuk kehidupan. '],
    image: contoh,
    createdAt: new Date()
  },
  {
    id: 4,
    title: "Dari Jemari yang Menggarami Waktu",
    slug: "garam-kusamba",
    contents: ['Di tepi pantai Kusamba, sebelum fajar menyingsing, para petani garam sudah menyapa laut dengan membawa harapan untuk kehidupan. '],
    image: contoh,
    createdAt: new Date()
  }
]

function formatDate(date) {
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = bulan[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${month} ${year}`;
}

function truncation(text) {
  if (!text) return '';

  if (text.length > 640 && window.innerWidth >= 768) {
    return text.substring(0, 768) + '...';
  }
  if (text.length > 120 && window.innerWidth < 768 && window.innerWidth >= 480) {
    return text.substring(0, 120) + '...';
  }
  if (text.length > 50 && window.innerWidth < 480 && window.innerWidth >= 450) {
    return text.substring(0, 50) + '...';
  } if (text.length > 50 && window.innerWidth < 450) {
    return ''
  }
  return text;
}

function headerTruncation(text) {
  if (!text) return '';

  if (text.length > 640 && window.innerWidth >= 768) {
    return text.substring(0, 640) + '...';
  }
  if (text.length > 320 && window.innerWidth >= 768) {
    return text.substring(0, 320) + '...';
  }
  if (text.length > 160 && window.innerWidth < 768) {
    return text.substring(0, 160) + '...';
  }
  if (text.length > 80 && window.innerWidth < 480) {
    return text.substring(0, 80) + '...';
  }
  return text;
}

onMounted(() => {
  window.scrollTo(0, 0)
  store.fetchArticles();
})
</script>
<template>
  <div class="w-full h-fit min-h-screen overflow-hidden bg-[#F2DAC0] relative">
    <div class="w-full fit flex flex-col items-center relative z-20">
      <img class="w-full h-screen object-cover z-0" src="../assets/bg/artikel.png" alt="rekomendasi-artikel">
      <div class="w-full h-full absolute flex flex-col items-center justify-center p-4 lg:p-20">
        <h5 class="text-[#F2DAC0] text-2xl md:text-5xl text-center font-[Kaisei] delay-200 duration-300">
          {{ articleList[0].title }}</h5>
        <div class="w-1/2 md:w-1/4 mt-8">
          <button
            class="bg-[#AA2123] hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
            @click="toPage('/articles/' + articleList[0].slug)">Baca Selengkapnya</button>
        </div>
      </div>
      <div class="bg-gradient-to-b from-[#26190e82] lg:from-[#26190e] via-transparent absolute top-0 w-full h-96 z-0">
      </div>
      <!-- Tambahan: Gradient dari bawah ke atas -->
    </div>
    <div class="w-full h-fit z-20 flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full md:w-4/5 mt-20">
        <div v-for="article in articleList.slice(1, articleList.length)" :key="article.id" class="z-20 cursor-pointer">
          <div class="flex flex-col p-8 z-20" @click="toPage('/articles/' + article.slug)">
            <img :src="article.image" :alt="article.title">
            <h6 class="text-xl text-center py-8 px-2">{{ article.title }}</h6>
            <div class="h-[2px] w-full bg-gray-700 shadow-sm opacity-50"></div>
            <h6 class="text-center py-8 px-2">{{ article.contents[0] }}</h6>
          </div>

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>