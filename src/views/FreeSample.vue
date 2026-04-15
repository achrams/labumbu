<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />

    <!-- HERO -->
    <div class="w-full lg:min-h-screen flex flex-col items-center justify-center relative">

      <!-- SPLIDE -->
      <div class="w-full h-screen">
        <Splide :options="opt" aria-label="Artisan Salts Sampling Headers">
          <SplideSlide v-for="img in headerImages" :key="img.alt">
            <img :src="img.url" :alt="img.alt" loading="lazy" class="w-full h-screen object-cover"
              :class="img.customClass" />
          </SplideSlide>
        </Splide>
      </div>

      <!-- OVERLAY (FIX DI SINI) -->
      <div
        class="w-full z-20 p-8 lg:pt-4 lg:px-24 h-screen absolute top-0 flex flex-col justify-center pointer-events-none">

        <div
          class="w-full lg:w-3/7 flex flex-col justify-between items-center lg:items-start gap-10 mt-0 pointer-events-auto">

          <p
            class="font-extrabold text-white text-4xl lg:text-5xl text-start md:text-center lg:text-start [text-shadow:0_0_10px_rgba(0,0,0,0.8)]">
            Discover Hidden Treasures from Indonesia’s Nature, Brought Into Your Daily Cooking Through Salt
          </p>

          <a href="#sample-here"
            class="flex flex-col lg:flex-row items-center gap-2 [text-shadow:0_0_10px_rgba(0,0,0,0.8)] text-white font-semibold text-4xl z-20 w-fit cursor-pointer py-2"
            v-smooth-scroll>
            <h1>
              Get Free Sample
            </h1>
            <img class="w-7 mt-2 animate-bounce duration-1000" src="../assets/icon/chevron-down.png" alt="up-btn">
          </a>

        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="w-full min-h-screen h-max flex flex-col items-center justify-start relative">
      <img class="w-full object-cover object-[60%_50%] lg:object-right absolute z-10 h-[120vh] lg:h-auto"
        src="../assets/sampling/petani-tejakula.jpg" alt="second-sample-image-header" />

      <div class="w-full h-24 z-40 absolute top-0 -mt-20" id="sample-here"></div>

      <div class="w-full z-20 p-8 lg:p-24 lg:mb-40 h-max">
        <div class="w-full lg:w-1/3 h-max bg-white px-8 pt-12 pb-10 mt-7 flex flex-col gap-6">

          <h3 class="text-4xl lg:text-5xl font-extrabold">
            Try Nature’s <br> Truest Flavor.
          </h3>

          <p>
            Experience the purity of natural salt with carefully sourced artisan salt from Indonesia. For each free
            sample, discover how real purity brings out the true flavor of your cooking, without impurities getting in
            the way.
          </p>

          <div class="w-full flex justify-center">
            <button
              class="w-max px-12 py-2 bg-black rounded-4xl text-lg text-white shadow-sm shadow-black cursor-pointer"
              @click="toggleModal">
              Claim Yours
            </button>
          </div>

        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style>
/* OPTIONAL: pastikan arrow selalu di atas */
.splide__arrow {
  z-index: 30 !important;
}
</style>
<script setup>
import { useDataStore } from '@/stores';
const store = useDataStore();

import Footer from '@/components/Footer.vue';
import FormInput from '@/components/FormInput.vue';
import { computed } from 'vue';
import SampleNotification from '@/components/SampleNotification.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import first from '../assets/sampling/labumbu-garam-krayan.jpg'
import second from '../assets/sampling/labumbu-garam-nipah-papua.jpg'
import third from '../assets/sampling/labumbu-artisan-salt-bali.jpg'
import fourth from '../assets/sampling/labumbu-garam-bledug-kuwu.jpg'
import fifth from '../assets/sampling/labumbu-artisan-salt.jpg'
import fifthAlt from '../assets/sampling/fifth_alt.jpeg'
const isMobile = window.innerWidth <= 768;

import { useHead } from '@vueuse/head'

useHead({
  title: 'Garam Tradisional Premium Indonesia | LaBumbu',
  meta: [
    {
      name: 'description',
      content: 'Coba garam tradisional premium dari Indonesia. LaBumbu menghadirkan garam alami dari berbagai daerah seperti Bali, Krayan, dan Bledug Kuwu.'
    },
    {
      name: 'keywords',
      content: 'garam indonesia, garam tradisional, garam premium, garam bali, garam krayan, garam bledug kuwu'
    },
    {
      property: 'og:title',
      content: 'Garam Tradisional Premium Indonesia | LaBumbu'
    },
    {
      property: 'og:description',
      content: 'Discover artisan salt from Indonesia. Try free samples from LaBumbu.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ], script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Garam Tradisional LaBumbu",
        "description": "Garam alami premium dari Indonesia",
        "brand": {
          "@type": "Brand",
          "name": "LaBumbu"
        }
      })
    }
  ]
})

const headerImages = [
  { url: (isMobile ? fifthAlt : fifth), alt: 'garam artisan indonesia premium labumbu', customClass: 'object-[60%_50%]' },
  { url: first, alt: 'garam krayan kalimantan premium', customClass: 'object-right' },
  { url: second, alt: 'garam nipah alami indonesia', customClass: 'object-[center_32%]' },
  { url: third, alt: 'garam bali tradisional', customClass: 'object-[center_30%]' },
  { url: fourth, alt: 'garam bledug kuwu jawa tengah', customClass: 'object-[65%_50%]' },
]

const showSampleModal = computed(() => store.showSampleModal)
const showSampleNotification = computed(() => store.showSampleNotification)

const toggleModal = async () => {
  // const res = await fetch('/api/get-total')
  // const data = await res.json();
  // console.log(data.total);
  store.toggleSampleModal()
}

const opt = {
  rewind: true,
  perPage: 1,
  pagination: true,
  type: 'loop',
  arrows: true,
  autoplay: true,
  interval: 5000,
  speed: 1500
}

</script>