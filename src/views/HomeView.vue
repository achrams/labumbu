<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Footer from '../components/Footer.vue'
import { useRouter } from 'vue-router';
import { useDataStore } from '@/stores';

const store = useDataStore()
const router = useRouter()
const scrollY = ref(0)
const playTitle = ref([false, false, false, false, false])

import amed from '../assets/artisan/JAR_AMED.png'
import kusamba from '../assets/artisan/JAR_KUSAMBA.png'
import kuwu from '../assets/artisan/JAR_KUWU_I.png'
import tejakula from '../assets/artisan/JAR_TEJAKULA_I.png'
// import soon from '../assets/artisan/JAR_SOON.png'
import krayan from '../assets/artisan/JAR_KRAYAN.png'
import nipah from '../assets/artisan/JAR_NIPAH.png'

import bawangputih from '../assets/spices/bawang-putih.png'
import latam from '../assets/spices/lada-hitam.png'
import cabe from '../assets/spices/cabe-bubuk.png'
import tumbar from '../assets/spices/ketumbar.png'
import laput from '../assets/spices/lada-putih.png'
import kunyit from '../assets/spices/kunyit.png'

const images = [
  { url: amed, title: 'Garam Amed' },
  { url: kusamba, title: 'Garam Kusamba' },
  { url: kuwu, title: 'Garam Bledug Kuwu' },
  { url: tejakula, title: 'Garam Tejakula' },
  { url: krayan, title: 'Garam Krayan' },
  { url: nipah, title: 'Garam Nipah' }
]

const spiceImages = [
  { url: bawangputih, title: 'Bawang Putih' },
  { url: latam, title: 'Lada Hitam Bubuk' },
  { url: cabe, title: 'Cabai Bubuk' },
  { url: tumbar, title: 'Ketumbar Bubuk' },
  { url: laput, title: 'Lada Putih Bubuk' },
  { url: kunyit, title: 'Kunyit Bubuk' },
]

const recommendation = computed(() => store.recommendations)
const isLoading = computed(() => store.isLoading)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

const toPage = (val) => {
  router.push(val)
}

const opt = {
  rewind: true,
  perPage: 5,
  pagination: false,
  breakpoints: {
    800: {
      perPage: 3,
    },
    640: {
      perPage: 2,
    },
    480: {
      perPage: 1
    }
  }
}

const opt2 = {
  rewind: true,
  perPage: 6,
  pagination: false,
  breakpoints: {
    800: {
      perPage: 4,
    },
    640: {
      perPage: 3,
    },
    480: {
      perPage: 1
    }
  }
}

onMounted(() => {
  window.scrollTo(0, 0) // Reset scroll position saat halaman dimuat
  window.addEventListener('scroll', handleScroll)
  store.fetchRecommendationRecipes()
  // Deteksi desktop
  const isDesktop = window.innerWidth >= 1024

  if (isDesktop) {
    // Semua tulisan langsung tampil di desktop
    setTimeout(() => {
      playTitle.value = [true, true, true, true, false]

    }, 800);
    setTimeout(() => {
      playTitle.value[4] = true
    }, 1250);
  } else {
    // Tampilkan bertahap untuk mobile
    let index = 0
    let interv = setInterval(() => {
      if (index < playTitle.value.length) {
        playTitle.value[index] = true
        index++
      } else {
        clearInterval(interv)
      }
    }, 200)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-[#F2DAC0]">
    <div class="w-full h-full relative">
      <div class="w-full h-fit ">
        <div class="absolute h-full w-full flex flex-col justify-end lg:items-center">
          <div class="p-4 flex w-full text-center md:w-4/5 flex-col gap-1 items-center lg:items-center flex-wrap">
            <transition name="slide-left">
              <h5 v-if="playTitle[1]" class="text-[#F2DAC0] text-6xl lg:text-7xl font-[Kaisei] delay-200 duration-300">
                Guardians of Indonesia's</h5>
            </transition>
            <transition name="slide-left">
              <h5 v-if="playTitle[0]" class="text-[#F2DAC0] text-6xl lg:text-7xl font-[Kaisei] delay-200 duration-300">
                Sacred Taste
              </h5>
            </transition>
          </div>
          <div v-if="!playTitle[4]" class="w-full h-64"></div>
          <transition name="slide-up">
            <div v-if="playTitle[4]" class="p-4 w-full lg:w-9/12 h-64">
              <div class="w-full flex justify-center px-4 mt-8 gap-8">
                <div class="w-1/2 md:w-1/5">
                  <button
                    class="bg-[#AA2123] hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/artisan')">Jelajahi Cerita</button>
                </div>
                <!-- <div class="w-1/2 md:w-1/5">
                  <button
                    class="bg-[#F2DAC0] hover:bg-[#c5b19b] px-4 py-2 w-full font-[FigTree] text-[#000000] text-md cursor-pointer"
                    @click="toPage('/articles')">Jelajahi Cerita</button>
                </div> -->
              </div>
            </div>
          </transition>
        </div>
        <div class="bg-gradient-to-b from-[#26190E] via-transparent absolute top-0 w-full h-96"></div>
        <img src="../assets/bg/dash.png" alt="top-banner"
          class="hidden lg:block w-full h-screen object-cover object-center">
        <img src="../assets/bg/dash.png" alt="top-banner"
          class="block lg:hidden w-full h-screen object-cover object-center">
      </div>
    </div>
    <div class="w-full h-full bg-[#F2DAC0]">
      <transition name="fade">
        <div v-if="scrollY >= 200" class="w-full h-fit bg-[#F2DAC0] py-12 flex flex-col items-center relative">
          <div class="w-full lg:w-2/3 px-4">
            <h5 class="text-[#26190E] text-4xl lg:text-6xl font-[Kaisei] text-center">Tentang Kami</h5>
          </div>
          <div class="w-full my-12 z-20 flex flex-col items-center">
            <p
              class="text-[#26190E] font-light nav-font text-[14px] md:text-xl lg:text-2xl text-center z-20 px-4 w-full lg:w-9/12">
              Untuk para individu modern dan keluarga yang menghargai kualitas, keaslian, dan kedalaman budaya dalam
              setiap hidangan, LaBumbu adalah brand rempah lokal premium yang menyajikan esensi autentik Indonesia yang
              kami percaya bahwa setiap taburan nya bukan hanya tentang rasa, tetapi tentang menghidupkan dan berbagi
              cerita yang menjadi penggerak dari fondasi kehidupan.
            </p>
          </div>
          <div class="w-full lg:w-full mt-30 px-8">
            <div class="w-full h-fit bg-[#3F4B35] relative">
              <div class="w-full flex items-center justify-center">
                <div class="-mt-12 md:-mt-18"><img src="../assets/icon/rectangle.png" alt="garis_1"></div>
                <div
                  class="rounded-full w-80 h-40 md:w-64 md:h-64 bg-[#3F4B35] -mt-12 md:-mt-18 flex flex-col items-center justify-center p-8">
                  <img class="w-64 md:w-32" src="../assets/icon/artisan_salt.png" alt="artisan_salt_title">
                </div>
                <div class="-mt-12 md:-mt-18"><img src="../assets/icon/rectangle.png" alt="garis_2"></div>
              </div>
              <Splide :options="opt" aria-label="Artisan Salts">
                <SplideSlide v-for="img in images" :key="img.title">
                  <div class="w-full flex flex-col items-center justify-center">
                    <img :src="img.url" :alt="img.title" class="w-50">
                    <h5 class="text-white font-[FigTree]\">{{ img.title }}</h5>
                  </div>
                </SplideSlide>
              </Splide>
              <div class="py-12 px-4 lg:px-32 text-white font-[FigTree] text-center text-xl">Nikmati cita rasa rempah
                Indonesia
                dengan
                Labumbu!
                Terbuat dari 100% bahan alami, tanpa pengawet, tanpa pewarna, dan tanpa penyedap buatan. Cocok untuk
                pelengkap cerita masakanmu, praktis digunakan, dan dikemas higienis.</div>
              <div class="w-full flex items-center justify-center pt-8 pb-12">
                <div class="w-3/4 md:w-1/6">
                  <button
                    class="bg-[#AA2123] underline hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/artisan')">Baca Selengkapnya</button>
                </div>
              </div>
              <!-- <div class="absolute bottom-0 right-0 pb-8 pr-8 w-1/3 h-1/3">
                <img src="../assets/bg/artisan_1.png" alt="artisan_1">
              </div> -->
            </div>
          </div>
        </div>
      </transition>
      <div class="w-full bg-[#F2DAC0] flex flex-col items-center justify-center py-8 px-8 md:px-48 relative">
        <transition name="slide-up">
          <div v-if="scrollY >= 1000" class="w-full">
            <div class="w-full flex items-center justify-between">
              <div class="w-1/5 lg:w-1/3">
                <img class="w-full" src="../assets/icon/rectangle_item.png" alt="rect_item_1">
              </div>
              <div class="flex items-center gap-1">
                <img class="w-12 md:w-24" src="../assets/bg/bawangkecil.png" alt="bawang_kecil_1">
                <div class="flex flex-col items-start">
                  <h6 class="font-[Kaisei] text-md md:text-xl">Labumbu</h6>
                  <h6 class="font-[Kaisei] text-md md:text-xl">Spices</h6>
                </div>
              </div>
              <div class="w-1/5 lg:w-1/3">
                <img class="w-full" src="../assets/icon/rectangle_item.png" alt="rect_item_2">
              </div>
            </div>
            <Splide :options="opt2" aria-label="Labumbu Spices">
              <SplideSlide v-for="img in spiceImages" :key="img.title">
                <div class="w-full flex flex-col items-center">
                  <img :src="img.url" :alt="img.title">
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </transition>
      </div>
      <div class="w-full px-8 font-[FigTree] relative">
        <h5 class="text-center text-lg text-[#AA2123]">Nikmati cita rasa rempah Indonesia dengan Labumbu!
        </h5>
        <h5 class="text-center text-lg">
          Terbuat dari 100% bahan alami, tanpa pengawet, tanpa pewarna, dan tanpa penyedap buatan. Cocok untuk
          pelengkap cerita masakanmu, praktis digunakan, dan dikemas higienis.
        </h5>
        <!-- <div class="text-center text-lg underline mt-4">
          <h6 class="cursor-pointer">
            Jelajahi Produk
          </h6>
        </div> -->
        <!-- <div class="text-center text-4xl lg:text-8xl font-[Kaisei] mt-16 lg:mt-24">Jelajahi Cerita</div> -->
        <!-- <div class="mt-12 lg:h-[600px] w-full relative">
          <img class="w-full h-auto bg-cover" src="../assets/bg/peta.png" alt="peta-artisan">
          <div
            class="w-6 h-18 absolute md:-mt-[11vh] md:ml-[30vw] lg:-mt-[14vh] lg:ml-[30vw] xl:ml-[32rem] xl:-mt-[15rem] cursor-pointer flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-red-400"></div>
            <div class="w-0.5 h-11 bg-red-400"></div>
          </div>
          <div
            class="w-6 h-18 absolute top-10 md:mt-[1vh] md:ml-[42vw] lg:mt-[2vh] lg:ml-[45vw] xl:mt-[8rem] xl:ml-[43rem] cursor-pointer flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-red-400"></div>
            <div class="w-0.5 h-11 bg-red-400"></div>
          </div>
          <div
            class="w-6 h-18 absolute md:ml-[40vw] md:-mt-[10vh] lg:ml-[41vw] lg:-mt-[12vh] xl:ml-[42rem] xl:-mt-[13rem] cursor-pointer flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-red-400"></div>
            <div class="w-0.5 h-11 bg-red-400"></div>
          </div>
          <div
            class="w-6 h-18 absolute right-0 md:mr-[7vw] md:-mt-[15vh] lg:mr-[7vw] lg:-mt-[20vh] xl:mr-[7vw] xl:-mt-[20rem] cursor-pointer flex flex-col items-center">
            <div class="w-6 h-6 rounded-full bg-red-400"></div>
            <div class="w-0.5 h-11 bg-red-400"></div>
          </div>
        </div> -->
      </div>
      <div class="p-4">
        <Footer />
      </div>
    </div>
  </div>
</template>
<style>
.bg-resep {
  background-image: url('../assets/bg/bg-resep.jpg');
  background-size: cover;
  background-position: center;
}

.vertical-lr {
  writing-mode: vertical-rl;
}

.hide-scrollbar {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s ease;
}

.slide-up-enter-from {
  transform: translateY(50px);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(50px);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s ease;
}

.slide-left-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-left-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.4s ease;
}

.slide-right-enter-from {
  transform: translateX(100px);
  opacity: 0;
}

.slide-right-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>