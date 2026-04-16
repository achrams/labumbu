<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />

    <!-- HERO -->
    <div class="w-full lg:min-h-screen flex flex-col items-center justify-center relative">

      <!-- SPLIDE -->
      <div class="w-full h-screen">
        <Splide :options="opt" aria-label="Artisan Salts Sampling Headers">
          <SplideSlide v-for="(img, index) in headerImages" :key="img.alt">

            <!-- ✅ RESPONSIVE IMAGE -->
            <picture>
              <!-- Mobile -->
              <source :srcset="img.mobile" media="(max-width: 768px)" />

              <!-- Desktop -->
              <img :src="img.desktop" :alt="img.alt" class="w-full h-screen object-cover"
                :loading="index === 0 ? 'eager' : 'lazy'" :fetchpriority="index === 0 ? 'high' : 'auto'" />
            </picture>

          </SplideSlide>
        </Splide>
      </div>

      <!-- OVERLAY -->
      <div
        class="w-full z-20 p-8 lg:pt-4 lg:px-24 h-screen absolute top-0 flex flex-col justify-center pointer-events-none">

        <div
          class="w-full lg:w-3/7 flex flex-col justify-between items-center lg:items-start gap-10 pointer-events-auto">

          <p
            class="font-extrabold text-white text-4xl lg:text-5xl text-start md:text-center lg:text-start [text-shadow:0_0_10px_rgba(0,0,0,0.8)]">
            Discover Hidden Treasures from Indonesia’s Nature, Brought Into Your Daily Cooking Through Salt
          </p>

          <a href="#sample-here"
            class="flex flex-col lg:flex-row items-center gap-2 [text-shadow:3px_3px_2px_rgba(0,0,0,1)] text-white font-semibold text-4xl z-20 w-fit cursor-pointer py-2"
            v-smooth-scroll>

            <h1>Get Free Sample</h1>

            <img src="../assets/icon/chevron-down-white.png"
              class="mt-2 w-9 animate-bounce [filter:drop-shadow(3px_3px_2px_rgba(0,0,0,1))]" alt="scroll down"
              loading="lazy" />

          </a>
        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="w-full min-h-screen flex flex-col items-center relative">

      <!-- ✅ bisa juga dijadiin picture kalau mau -->
      <img class="w-full object-cover object-[60%_50%] lg:object-right absolute z-10 h-[120vh] lg:h-auto"
        src="../assets/sampling/petani-tejakula.webp" alt="petani garam tejakula bali" loading="lazy" />

      <div class="w-full h-24 z-40 absolute top-0 -mt-20" id="sample-here"></div>

      <div class="w-full z-20 p-8 lg:p-24 lg:mb-40">
        <div class="w-full lg:w-1/3 bg-white px-8 pt-12 pb-10 mt-7 flex flex-col gap-6">

          <h3 class="text-4xl lg:text-5xl font-extrabold">
            Try Nature’s <br> Truest Flavor.
          </h3>

          <p>
            Experience the purity of natural salt with carefully sourced artisan salt from Indonesia.
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

<script setup>
import { useDataStore } from '@/stores'
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

import Footer from '@/components/Footer.vue'
import FormInput from '@/components/FormInput.vue'
import SampleNotification from '@/components/SampleNotification.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

// images
import first from '../assets/sampling/labumbu-garam-krayan.webp'
import firstMobile from '../assets/sampling/labumbu-garam-krayan-mobile.webp'
import second from '../assets/sampling/labumbu-garam-nipah-papua.webp'
import secondMobile from '../assets/sampling/labumbu-garam-nipah-papua-mobile.webp'
import third from '../assets/sampling/labumbu-artisan-salt-bali.webp'
import thirdMobile from '../assets/sampling/labumbu-artisan-salt-bali-mobile.webp'
import fourth from '../assets/sampling/labumbu-garam-bledug-kuwu.webp'
import fourthMobile from '../assets/sampling/labumbu-garam-bledug-kuwu-mobile.webp'
import fifth from '../assets/sampling/labumbu-artisan-salt.webp'
import fifthMobile from '../assets/sampling/fifth_alt.webp'

const store = useDataStore()

// ✅ SEO + preload hero image
useHead({
  title: 'Garam Tradisional Premium Indonesia | LaBumbu',
  meta: [
    {
      name: 'description',
      content: 'Coba garam tradisional premium dari Indonesia.'
    }
  ],
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: fifth
    }
  ]
})

// ✅ responsive image config
const headerImages = [
  { desktop: fifth, mobile: fifthMobile, alt: 'garam artisan indonesia premium labumbu' },
  { desktop: first, mobile: firstMobile, alt: 'garam krayan kalimantan premium' },
  { desktop: second, mobile: secondMobile, alt: 'garam nipah alami indonesia' },
  { desktop: third, mobile: thirdMobile, alt: 'garam bali tradisional' },
  { desktop: fourth, mobile: fourthMobile, alt: 'garam bledug kuwu jawa tengah' },
]

const showSampleModal = computed(() => store.showSampleModal)
const showSampleNotification = computed(() => store.showSampleNotification)

const toggleModal = () => {
  store.toggleSampleModal()
}

// splide config
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

<style>
.splide__arrow {
  z-index: 30 !important;
}
</style>