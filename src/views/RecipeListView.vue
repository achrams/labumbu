<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import Footer from '../components/Footer.vue'
import { useDataStore } from '@/stores'
import Fuse from 'fuse.js'

const store = useDataStore()
const router = useRouter()

const selectedCategory = ref(null)
const filteredItems = ref([])
const searchText = ref('')
const playAnim = ref([false, false, false, false, false])
const scrollY = ref(0)

const opt = {
  perPage: 5,
  perMove: 1,
  pagination: false,
  arrows: false,
  gap: '0.5rem',
  breakpoints: {
    1280: { perPage: 5 },
    1024: { perPage: 4 },
    768: { perPage: 3 },
    480: { perPage: 3 },
  }
}

const recipes = computed(() => store.recipes)
const category = computed(() => store.categories)

const changeCategory = (val) => {
  selectedCategory.value = val
  // reset filter kalau ganti kategori
  filteredItems.value = recipes.value.filter(item => item.categoryId === val)
}

const fuse = computed(() => {
  return new Fuse(recipes.value, {
    keys: ['name', 'description'], // field yang mau dicari
    threshold: 0.6, // makin kecil makin strict (0.0 exact, 1.0 super longgar)
  })
})

// 🔎 Watch searchText
watch(searchText, (newVal) => {
  if (newVal && newVal.length > 3) {
    const results = fuse.value.search(newVal)
    const matched = results.map(r => r.item)

    // filter juga by kategori
    filteredItems.value = selectedCategory.value
      ? matched.filter(item => item.categoryId === selectedCategory.value)
      : matched
  } else {
    // fallback kalau kosong / < 3 huruf
    filteredItems.value = selectedCategory.value
      ? recipes.value.filter(item => item.categoryId === selectedCategory.value)
      : recipes.value
  }
})


const toRecipe = (id) => {
  router.push('/recipes/' + id)
}

const toPage = (val) => {
  router.push(val)
}

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  store.fetchRecipes()
  store.fetchCategories()
    .then(res => {
      if (res.length > 0) {
        selectedCategory.value = res[0].id
        filteredItems.value = recipes.value.filter(item => item.categoryId === selectedCategory.value)
      }
    })
  window.scrollTo(0, 0)
  window.addEventListener('scroll', handleScroll)

  // animasi
  let index = 0
  let interv = setInterval(() => {
    if (index < playAnim.value.length) {
      playAnim.value[index] = true
      index++
    } else {
      clearInterval(interv)
    }
  }, 200)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="w-full relative bg-[#F2DAC0]">
    <div class="w-full py-28 h-[600px] lg:h-[90vh] flex flex-col items-center relative z-20">
      <transition name="slide-left">
        <div v-if="playAnim[0] === true"
          class="w-full h-fit px-4 lg:px-8 flex items-center justify-between gap-1 z-40 mt-0 lg:mt-8">
          <div class="w-10 h-auto bg-[#C44827] rounded-full p-2 flex items-center justify-center cursor-pointer z-40"
            @click="toPage('/')">
            <img src="../assets/icon/arrow.png" alt="icon-back" class="w-full h-full rotate-180" />
          </div>
          <div class="flex items-center bg-[#C28E5C] rounded-full px-4 py-2 w-full z-40">
            <input type="text" placeholder="Mau masak apa?"
              class="bg-transparent outline-none placeholder-white text-white font-[BetterSeason] flex-grow"
              v-model="searchText" />
            <div class="border-l border-white h-5 mx-2"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white"
              class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
            </svg>
          </div>
        </div>
      </transition>
      <transition name="slide-up">
        <div v-if="playAnim[2] === true"
          class="w-full z-20 absolute bottom-0 flex flex-col md:justify-start py-2 md:py-8 px-4 md:px-8">
          <div class="w-full mb-4 text-center md:text-start">
            <h5 class="text-2xl md:text-6xl text-white font-[BetterSeason]">{{ recipes[0].title }}</h5>
          </div>
          <div class="w-full flex justify-center md:justify-start mb-8">
            <button
              class="w-3/4 md:w-1/4 bg-[#AA2123] hover:bg-[#80181a] rounded-md px-4 py-2 title-font text-[#F2DAC0] text-md cursor-pointer z-20"
              @click="toRecipe(recipes[0].id)">Mulai
              Memasak</button>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <img v-if="playAnim[1] === true"
          class="absolute top-0 left-0 w-full mt-45 md:mt-0 h-[420px] lg:h-[90vh] object-cover z-0"
          :src="recipes[0].image" alt="rekomendasi">
      </transition>
      <div class="bg-gradient-to-b from-[#26190e82] lg:from-[#26190e] via-transparent absolute top-0 w-full h-96 z-0">
      </div>

      <!-- Tambahan: Gradient dari bawah ke atas -->
      <div v-if="playAnim[2] === true"
        class="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black/70 to-transparent z-0"></div>
    </div>
    <div class="absolute w-full h-full top-0 z-0">
      <div class=" w-full flex justify-between z-0">
        <img src="../assets/bg/lengkap.png" alt="lengkap-kiri" class="z-0">
        <img src="../assets/bg/lengkapkanan.png" alt="lengkap-kanan" class="z-0">
      </div>
      <div class=" w-full flex justify-between z-0">
        <img src="../assets/bg/lengkap2.png" alt="lengkap-kiri-2" class="z-0">
        <img src="../assets/bg/lengkapkanan2.png" alt="lengkap-kanan-2" class="z-0">
      </div>
    </div>
    <!-- Gambar Background -->
    <transition name="fade">
      <div v-if="playAnim[3] === true" class="p-4 w-full h-fit z-20">
        <h5 class="text-xl font-[Figtree] font-bold uppercase my-4 z-20">Kategori</h5>
        <Splide :options="opt" aria-label="My Favorite Images">
          <SplideSlide v-for="cat in category" :key="cat.id"
            class="flex flex-col items-center justify-center px-1 cursor-pointer w-fit z-20"
            @click="changeCategory(cat.id)">
            <img data-splide-lazy :src="cat.image" :alt="cat.name"
              class="h-32 md:h-60 lg:h-80 object-cover rounded-4xl" />
            <h5 class="w-full md:w-3/4 lg:w-4/5 mt-2 text-center text-xs font-[BetterSeason] rounded-full px-2 py-1"
              :class="selectedCategory === cat.id
                ? 'bg-[#C54827] text-[#F2DAC0]'
                : 'text-black'">
              {{ cat.name }}
            </h5>
          </SplideSlide>
        </Splide>
      </div>
      <div v-else class="w-full h-32 md:h-60 lg:h-80"></div>
    </transition>
    <transition name="slide-up">
      <div v-if="scrollY > 100" class="px-4 py-8 w-full h-fit z-20">
        <h5 class="text-xl font-[Figtree] font-bold uppercase my-4 px-4 z-20">
          Rekomendasi Untuk Kamu
        </h5>
        <div v-if="filteredItems.length > 0"
          class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 px-4 z-20">
          <div v-for="(item, index) in filteredItems" :key="index"
            class="h-48 md:h-80 bg-white rounded-xl flex flex-col items-center justify-between py-4 px-2 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 z-20">
            <h5 class="text-center text-xs md:text-sm font-[BetterSeason] px-2">
              {{ item.title }}
            </h5>
            <img :src="item.image" :alt="item.title" class="w-24 md:w-40 h-24 md:h-40 object-cover rounded-full" />
            <button
              class="bg-[#C54827] hover:bg-[#80181a] w-full md:w-3/4 font-[BetterSeason] text-[#F2DAC0] text-xs px-2 py-1 rounded-lg font-bold cursor-pointer"
              @click="toRecipe(item.id)">
              MULAI MEMASAK
            </button>
          </div>
        </div>
        <div v-else class="w-full h-48 md:h-80 flex items-center justify-center">
          <p class="text-center text-gray-800 font-[Figtree] px-8">Tidak ada resep yang ditemukan untuk kategori ini.
          </p>
        </div>
      </div>
    </transition>
    <div class="w-full h-fit relative">
      <Footer class="z-30" />
    </div>
  </div>
</template>
