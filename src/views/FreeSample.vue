<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />

    <!-- HERO -->
    <div class="w-full lg:min-h-screen flex flex-col items-center justify-center relative">
      <div class="h-screen w-full absolute top-0 bg-black/20 z-20"></div>
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

          <p class="font-extrabold text-white text-4xl lg:text-5xl text-start md:text-center lg:text-start">
            Discover Hidden Treasures from Indonesia’s Nature, Brought Into Your Daily Cooking Through Salt
          </p>

          <a href="#sample-here"
            class="flex flex-col lg:flex-row items-center gap-2 text-white font-semibold text-4xl z-20 w-fit cursor-pointer py-2"
            v-smooth-scroll>

            <h1>Get Free Sample</h1>

            <img src="../assets/icon/chevron-down-white.png"
              class="mt-2 w-7 animate-bounce-natural duration-1000 ease-in-out" alt="scroll down" loading="lazy" />

          </a>
        </div>
      </div>
    </div>
    <div class="w-full min-h-screen flex flex-wrap lg:flex-nowrap relative py-8 px-8 lg:px-24 gap-2">
      <div class="w-full lg:w-1/2 lg:min-h-screen bg-gray-200">
        <div class="w-full py-4 flex flex-col lg:flex-row gap-2 justify-center items-center lg:items-start">
          <h4 class="font-semibold lg:font-extrabold text-3xl lg:text-3xl text-center">What’s in Your Free Sample?
          </h4>
          <img class="w-8 h-auto mt-1" src="../assets/icon/chevron-down-green.png" alt="arrow down">
        </div>
        <div class="w-full flex justify-center">
          <img class="w-3/4" src="../assets/sampling/labumbu-artisan-salt-sample.png" alt="labumbu artisan salt sample">
        </div>
        <div class="w-full py-4">
          <h5 class="text-lg text-center px-2">You’ll receive a mini sample box containing our collection of artisan
            salts ✨
          </h5>
          <div class="px-4 lg:px-8 pb-8 flex flex-col items-center">
            <h6 class="py-2">Inside your box:</h6>
            <div class="w-full flex justify-center">
              <div class="w-1/2 flex justify-start lg:justify-center">
                <ul class="list-disc list-inside text-sm lg:text-md">
                  <li>Tejakula Salt</li>
                  <li>Kusamba Salt</li>
                  <li>Amed Salt</li>
                </ul>
              </div>
              <div class="w-1/2 flex justify-start lg:justify-center">
                <ul class="list-disc list-inside text-sm lg:text-md">
                  <li>Krayan Salt</li>
                  <li>Bledug Kuwu Salt</li>
                  <li>Nipah Salt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-1/2 lg:min-h-screen bg-gray-100 flex flex-col gap-0 lg:gap-40 items-center">
        <div class="w-full py-4 flex flex-col lg:flex-row gap-2 justify-center items-center lg:items-start">
          <h4 class="font-semibold lg:font-extrabold text-3xl lg:text-3xl text-center">How to Claim Your Free Sample
          </h4>
          <img class="w-8 h-auto mt-1" src="../assets/icon/chevron-down-green.png" alt="arrow down">
        </div>
        <div class="w-full flex flex-col items-center text-center">
          <div class="py-6 px-4">
            <h5 class="text-lg">Don’t miss out while it’s still available! ✨</h5>
          </div>
          <ul class="list-decimal lg:list-inside px-8 pb-8 text-start lg:text-center">
            <li v-for="step in claimStep" :key="step.id" class="mb-5">
              <span>
                <span class="text-lg font-semibold">
                  {{ step.title }}
                  <img class="inline h-5 align-middle ml-1" src="../assets/icon/checklist-green.png">
                </span>
                <br>
                <span class="text-md">{{ step.text }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- SECTION 2 -->
    <div class="w-full min-h-screen relative">
      <div class="w-full h-[120vh] md:h-[70vh] lg:h-[120vh] flex flex-col items-center">
        <!-- ✅ bisa juga dijadiin picture kalau mau -->
        <img class="w-full object-cover object-[60%_50%] lg:object-right absolute z-10 h-[120vh] md:h-auto lg:h-auto"
          src="../assets/sampling/petani-tejakula.webp" alt="petani garam tejakula bali" loading="lazy" />

        <div class="w-full h-24 z-40 absolute top-0 -mt-20" id="sample-here"></div>

        <div class="w-full z-20 p-8 lg:p-24 lg:mb-40">
          <div class="w-full lg:w-2/5 bg-white px-8 pt-12 pb-10 mt-7 flex flex-col gap-6">

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
    </div>
    <div class="mt-0 lg:mt-12">
      <Footer />
    </div>
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

const claimStep = [
  {
    id: 1,
    title: 'Click “Claim Yours”',
    text: 'Start your request in just one tap.'
  },
  {
    id: 2,
    title: 'Fill in your details',
    text: 'Complete the short form so we know where to send it.'
  },
  {
    id: 3,
    title: 'Our team will contact you shortly to confirm',
    text: 'We’ll confirm your details before shipping.'
  },
  {
    id: 4,
    title: 'Your free sample will be delivered to your home',
    text: 'Just sit back and wait for it to arrive at your doorstep!'
  }
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

/* Natural Bounce Animation */
@keyframes bounce-natural {

  0%,
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }


  50% {
    transform: translateY(-5px);
    animation-timing-function: ease-in;
  }
}

/* Utility class */
.animate-bounce-natural {
  animation: bounce-natural 1.7s infinite;
}
</style>