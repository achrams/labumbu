<template>
  <div class="w-full h-full flex flex-col items-center justify-center bg-[#F2DAC0] relative">
    <div v-if="article" class="w-full h-fit mt-24 md:mt-32">
      <div class="w-full px-8 md:px-16 py-4 md:py-2 flex flex-col items-center justify-center">
        <div class="w-full md:w-full flex flex-col md:flex-row md:justify-between md:flex-wrap lg:flex-nowrap">
          <div class="w-full lg:w-1/2">
            <h1 class="text-2xl md:text-6xl font-[Kaisen]">
              {{ article.title }}
            </h1>
            <h2 class="font-[Kaisen] text-md md:text-3xl my-3">{{ article.subtitle }}</h2>
            <div class="flex flex-col min-h-80 justify-between">
              <div class="h-fit">
                <div class="flex flex-wrap gap-2 my-4">
                  <div class="py-2 px-4 border-[#BB9160] border-2 rounded w-fit flex gap-2 items-center"><img
                      src="../assets/icon/location.png">
                    <p>{{ article.location }}</p>
                  </div>
                  <div class="py-2 px-4 border-[#BB9160] border-2 rounded w-fit flex gap-2 items-center"><img
                      src="../assets/icon/checklist.png">
                    <p>Availability</p>
                  </div>
                </div>
                <div class="w-full flex lg:hidden items-center justify-center px-4 py-8">
                  <img class="w-2/3" :src="article.image" alt="mobile-jar">
                </div>
                <h5 class="text-lg text-justify">
                  {{ article.intro }}
                </h5>
              </div>
              <div class="h-14">
                <div class="my-6 md:my-2 flex justify-center md:justify-start">
                  <button
                    class="bg-[#AA2123] hover:bg-[#80181a] px-8 py-2 w-fit font-[FigTree] rounded shadow-md text-[#F2DAC0] text-md cursor-pointer">Pesan
                    Produk</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/3 md:w-1/2 lg:w-1/3 lg:flex items-center justify-center hidden">
            <img class="w-full" :src="article.image" alt="article_jar">
          </div>
        </div>
        <div class="w-full mt-12 font-[Kaisen]">
          <div class="flex gap-4 items-center">
            <img src="../assets/icon/info.png" alt="info-overview">
            <div class="text-xl md:text-2xl lg:text-3xl">Overview</div>
          </div>
          <div class="py-4"><img class="w-full" src="../assets/icon/longrect.png" alt="garis_panjang"></div>
          <h5 class="text-lg md:text-xl lg:text-2xl">Deskripsi Produk</h5>
        </div>
        <div v-if="article.description">
          <div class="mt-8 text-justify text-lg font-[FigTree]" v-for="(cont, index) in article.description"
            :key="'desc-' + (index + 1)">{{
              cont }}</div>
        </div>
        <div class="w-full mt-16">
          <h5 class="text-lg md:text-xl lg:text-2xl">Bagaimana {{ article.title }} Dibuat?</h5>
          <div class="w-full grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-wrap justify-items-center mt-8">
            <div class="w-4/5" v-for="(step, index) in article.productions" :key="'step' + index">
              <img :src="step.image" :alt="'langkah ke-' + step.text">
              <div class="w-full h-16">
                <h6 class="text-md md:text-lg text-center my-4">{{ step.name }}</h6>
              </div>
              <p class="text-xs text-justify">{{ step.text }}</p>
            </div>
          </div>
        </div>
        <div class="w-full mt-16 flex flex-col md:flex-row justify-start md:justify-around">
          <div class="w-fit flex flex-col items-start">
            <h3 class="font-[Kaisei] text-2xl mb-4">Manfaat & Kelebihan</h3>
            <div class="flex gap-2 items-start" v-for="pro in article.pros" :key="pro">
              <img class="h-6" src="../assets/icon/ceklis2.png" alt="ceklis-kotak">
              <p class="text-sm">{{ pro }}</p>
            </div>
          </div>
          <div class="w-fit flex flex-col items-start mt-4 md:my-0">
            <h3 class="font-[Kaisei] text-2xl mb-4">Packaging & Ukuran</h3>
            <div class="flex gap-2 items-start" v-for="pack in article.packaging" :key="pack">
              <img class="h-6" src="../assets/icon/ceklis2.png" alt="ceklis-kotak">
              <p class="text-sm">{{ pack }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-20 mb-8">
        <div class="w-full flex gap-2">
          <div class="w-1/3 md:w-full p-4"><img class="w-full" src="../assets/icon/longrect.png" alt="garis_panjang">
          </div>
          <div class="w-1/3 md:w-2/4 text-center flex items-center justify-center gap-2">
            <h2 class="text-2xl md:text-4xl font-[Kaisen]">The Story</h2>
            <img class="block md:hidden duration-150 delay-75" :class="showStory ? 'rotate-180' : 'rotate-0'"
              src="../assets/icon/chevron-up.png" alt="expand/minimize" @click="toggleStory">
          </div>
          <div class="w-1/3 md:w-full p-4"><img class="w-full" src="../assets/icon/longrect.png" alt="garis_panjang">
          </div>
        </div>
      </div>
      <div :class="showStory ? 'block' : 'hidden'"
        class="w-full min-h-96 h-fit bg-[#BB9160] relative delay-75 duration-200 overflow-hidden">
        <div class="p-8 md:p-16">
          <div class="w-full flex gap-2 py-4">
            <div class="w-2/5 hidden lg:block"></div>
            <div class="w-full lg:w-3/5">
              <h4 class="text-4xl text-center lg:text-left">{{ article.title }}</h4>
              <p class="text-center lg:text-left">Original from Labumbu</p>
            </div>
          </div>
          <div class="w-full flex gap-4 h-fit flex-wrap md:flex-wrap lg:flex-nowrap">
            <div class="w-full lg:w-2/5 relative z-50 p-2">
              <img class="relative z-50 h-96 lg:h-96 w-full object-cover" :src="article.storyImg"
                :alt="article.title + '-story'">
            </div>
            <div class="w-full lg:w-3/5 flex flex-col justify-between gap-4 text-justify">
              <p class="text-sm" v-for="(story, index) in splitStories()">{{ story }}</p>
            </div>
          </div>
          <div class="w-full flex flex-col gap-4 mt-4 text-justify">
            <p class="text-sm" v-for="(story, index) in leftoverStory">{{ story }}</p>
          </div>
        </div>
        <div class="w-full relative">
          <img class="w-[100vw] bottom-0 absolute object-cover z-0" src="../assets/artisan/tejakula/story_bg.png"
            :alt="article.title + 'story'">
        </div>
      </div>
      <div class="w-full mt-12 mb-8 px-8 md:px-16 py-4 md:py-2">
        <h2 class="text-2xl md:text-4xl font-[Kaisen]">Mungkin Kamu Suka</h2>
        <img class="w-full my-4" src="../assets/icon/longrect.png" alt="garis_panjang"></img>
        <div class="w-full p-8 text-center">
          <Splide :options="opt2" aria-label="Labumbu Artisan Recommendation">
            <SplideSlide v-for="art in recommendations" :key="art.slug + '-recommendation'" class="cursor-pointer"
              @click="toPage('/articles/' + art.slug)">
              <img class="w-full object-cover min-h-[150px] md:max-h-80" :src="art.image"
                :alt="art.slug + '-recommended-pic'">
              <div class="h-14 mt-2 flex flex-col">
                <h5 class="text-md md:text-lg">{{ art.title }}</h5>
                <p class="text-sm">Artisan Salt</p>
              </div>
              <div class="w-full p-4 h-2"><img class="w-full h-[2px]" src="../assets/icon/longrect.png"
                  alt="garis_panjang">
              </div>
              <div class="text-sm">
                {{ art.intro.toString().substring(0, 100) + '...' }}
              </div>
            </SplideSlide>

          </Splide>
        </div>
      </div>
    </div>
    <!-- Not Found -->
    <div v-else class="w-full h-screen flex flex-col items-center justify-center">
      <h1>Not Found.</h1>
      <button class="text-blue-500 underline cursor-pointer" @click="router.back()">Go Back</button>
    </div>
    <div class="px-4 md:px-8">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Footer from '@/components/Footer.vue';
import RecommendedProduct from '@/components/RecommendedProduct.vue';
import RecommendedRecipe from '@/components/RecommendedRecipe.vue';
import { useDataStore } from '@/stores';
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import artisan from '@/db/artisan';

const store = useDataStore();
const router = useRouter();
const route = useRoute()
const slug = route.params.id;
const article = ref({});
const showStory = ref(true)
const leftoverStory = ref([])
const recommendations = ref([])
// Scroll + Drag


const opt2 = {
  rewind: true,
  perPage: 5,
  pagination: false,
  breakpoints: {
    800: {
      perPage: 3,
    },
    640: {
      perPage: 3,
    },
    480: {
      perPage: 1
    }
  }
}

const articlesData = artisan
const toggleStory = () => {
  if (window.innerWidth <= 900) {
    showStory.value = !showStory.value
  }
  else showStory.value = true
}

const splitStories = () => {
  let arr = []
  let arts = article.value.stories
  let left = []
  for (let i in arts) {
    if (i < 5) arr.push(arts[i])
    else left.push(arts[i])
  }
  leftoverStory.value = left
  return arr
}

const toPage = (val) => {
  router.push(val)
}


onMounted(() => {
  window.scrollTo(0, 0);
  console.log(slug)
  // store.fetchArticleById(id).then((data) => {
  //   article.value = data;
  // });
  article.value = articlesData.find(art => art.slug == slug)
  const recommended = articlesData.filter(el => el.slug !== slug)
  recommendations.value = recommended
  console.log(recommendations.value)
});

watch(
  () => route.params.id,
  (newSlug) => {
    article.value = articlesData.find(art => art.slug === newSlug)
    const recommended = articlesData.filter(el => el.slug !== slug)
    recommendations.value = recommended
    window.scrollTo(0, 0)
  }
)

</script>
