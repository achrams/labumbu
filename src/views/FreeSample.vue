<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />

    <!-- HERO -->
    <div class="w-full min-h-screen">
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
                <img :src="img.desktop" :alt="img.alt" class="w-full h-screen object-cover" loading="eager"
                  fetchpriority="high" />
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
              class="font-extrabold text-white text-4xl lg:text-5xl text-start md:text-center lg:text-start pointer-events-none">
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
    </div>
    <div class="w-full min-h-screen">
      <div class="w-full h-max lg:min-h-screen flex flex-wrap lg:flex-nowrap relative">
        <div class="w-full lg:w-1/2 lg:min-h-screen py-8">
          <div class="w-full p-4 lg:py-8 lg:px-16">
            <h4 class="font-extrabold text-3xl lg:text-5xl text-[#AA2123]">What’s in Your Free Sample?
            </h4>
          </div>
          <div class="w-full flex flex-col items-center justify-center">
            <div class="hidden lg:block w-full lg:w-10/12 p-4 lg:p-0">
              <div class="w-full flex justify-center gap-10">
                <div class="w-3/4 lg:h-[330px] flex items-center">
                  <img class="w-full object-cover scale-130" src="../assets/sampling/labumbu-artisan-salt-sample.png"
                    alt="labumbu artisan salt sample">
                </div>
                <div class="w-1/4 h-[240px] lg:h-[330px]">
                  <div class="w-full h-1/2">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'nipah' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-nipah.png" alt="labumbu sachet garam nipah">
                  </div>
                  <div class="w-full h-1/2">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'bledug' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-bledug-kuwu.png"
                      alt="labumbu sachet garam bledug kuwu">
                  </div>
                </div>
              </div>
              <div class="w-full flex justify-center mt-10">
                <div class="w-full h-[120px] lg:h-[165px] flex justify-center gap-4">
                  <div class="h-full w-1/4">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'tejakula' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-tejakula.png" alt="labumbu sachet garam tejakula">
                  </div>
                  <div class="h-full w-1/4">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'kusamba' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-kusamba.png" alt="labumbu sachet kusamba">
                  </div>
                  <div class="h-full w-1/4">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'amed' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-amed.png" alt="labumbu sachet amed">
                  </div>
                  <div class="h-full w-1/4">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75"
                      :class="selectedSalt == 'krayan' ? 'scale-150' : ''"
                      src="../assets/sampling/labumbu-sachet-garam-krayan.png" alt="labumbu sachet krayan">
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full block lg:hidden">
              <Splide :options="mobileOpt" aria-label="Artisan Salts Sampling List" ref="splideRef">
                <SplideSlide v-for="sachet in productSlide" :key="sachet.alt">
                  <div class="w-full h-96"
                    :class="selectedSalt.id == sachet.id ? 'border-5 rounded-3xl border-blue-400' : ''">
                    <img class="h-full w-auto object-cover scale-130 duration-150 delay-75" :src="sachet.img"
                      :alt="sachet.alt">
                  </div>
                </SplideSlide>
              </Splide>
            </div>
            <div class="w-full px-4 lg:px-16 mt-6">
              <h5 class="text-xl lg:text-2xl font-semibold">
                You’ll receive a mini sample box containing our collection of artisan salts
                Inside your box:
              </h5>
              <div class="w-full flex gap-2 flex-wrap my-4 text-xl">
                <div class="px-4 py-2 rounded-3xl border-[#AA2123] text-[#AA2123] border-2 my-2 cursor-pointer"
                  v-for="(sachet, index) in productSlide" :key="sachet.alt"
                  :class="selectedSalt.title == sachet.title ? 'bg-[#AA2123]/30' : ''" @click="chooseSalt(index)">{{
                    sachet.title }}</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pt-8 pb-20 lg:pb-0 w-full lg:w-1/2 lg:min-h-screen bg-[#FDF7F0] flex flex-col gap-0 lg:gap-40 items-center">
          <div class="w-full p-4 lg:py-8 lg:px-16">
            <h4 class="font-extrabold text-3xl lg:text-5xl">How to Claim Your Free Sample?
            </h4>
            <div class="my-4">
              <h5 class="font-bold text-3xl lg:text-4xl text-[#AA2123]">4 easy steps:</h5>
            </div>
            <div class="mt-8 mb-12">
              <h6 class="text-xl text-gray-500 font-semibold">
                Don’t miss out while it’s still available! ✨
              </h6>
            </div>
            <div class="w-full flex flex-col gap-0 lg:gap-4" v-for="step in claimStep">
              <div class="w-full flex items-start gap-4">
                <div
                  class="w-8 h-8 p-4 lg:w-12 lg:h-12 flex items-center justify-center font-bold text-sm lg:text-lg text-[#aa2123] rounded-full border-2 bg-[#AA2123]/10 border-[#AA2123]">
                  {{ step.id }}</div>
                <div class="flex flex-col items-start justify-start">
                  <div class="text-lg font-bold">
                    {{ step.title }}
                    <span class="whitespace-nowrap">
                      <img class="inline h-5 align-middle mb-1" src="../assets/icon/checklist-green.png"
                        alt="checklist">
                    </span>
                  </div>
                  <div class="text-sm text-gray-500 font-semibold">
                    {{ step.text }}
                  </div>
                </div>
              </div>
              <div v-if="step.id !== 4" class="w-8 lg:w-12 h-12 flex items-center justify-center">
                <div class="w- h-8 border-r-1 border-l-1 border-[#AA2123]"></div>
              </div>
            </div>
            <div class="w-full flex gap-2 mt-18">
              <div
                class="w-1/3 min-h-32 bg-white rounded-3xl flex flex-col items-center justify-center border-1 border-gray-300">
                <h6 class="font-bold text-3xl">6</h6>
                <h6 class="text-gray-400 font-semibold">Salt Varieties</h6>
              </div>
              <div
                class="w-1/3 min-h-32 bg-white rounded-3xl flex flex-col items-center justify-center border-1 border-gray-300">
                <h6 class="font-bold text-3xl">100%</h6>
                <h6 class="text-gray-400 font-semibold">Artisan Made</h6>
              </div>
              <div
                class="w-1/3 min-h-32 bg-white rounded-3xl flex flex-col items-center justify-center border-1 border-gray-300">
                <h6 class="font-bold text-3xl">Free</h6>
                <h6 class="text-gray-400 font-semibold">No Cost</h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- SECTION 2 -->
    <div class="w-full min-h-screen">
      <div class="w-full min-h-screen relative">
        <div class="w-full h-[120vh] md:h-[70vh] lg:h-[120vh] flex flex-col items-center">
          <!-- ✅ bisa juga dijadiin picture kalau mau -->
          <img class="w-full object-cover object-[60%_50%] lg:object-right absolute z-10 h-[120vh] md:h-auto lg:h-auto"
            src="../assets/sampling/petani-tejakula.webp" alt="petani garam tejakula bali" loading="lazy" />

          <div class="w-full h-24 z-40 absolute top-0 -mt-20" id="sample-here"></div>

          <div class="w-full z-20 p-8 lg:p-24 lg:mb-40">
            <div class="w-full lg:w-[26vw] min-h-96 bg-white px-8 pt-12 pb-10 mt-7 flex flex-col gap-6">

              <h3 class="text-4xl lg:text-5xl font-extrabold">
                Try Nature’s <br> Truest Flavor.
              </h3>

              <p>
                Experience the purity of natural salt with carefully sourced artisan salt from Indonesia. For each free
                sample, discover how real purity brings out the true flavor of your cooking, without impurities getting
                in
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
    </div>
    <div class="mt-0 lg:mt-[6vw] 3xl:mt-[4vw]">
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores'
import { useHead } from '@vueuse/head'
import { computed, onMounted, ref } from 'vue'

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
const selectedSalt = ref({})
const store = useDataStore()
const splideRef = ref(null)

const chooseSalt = (val) => {
  selectedSalt.value = productSlide[val]
  splideRef.value.splide.go(val)
}


onMounted(() => {
  selectedSalt.value = productSlide[0]
  const splide = splideRef.value.splide
  splide.on('moved', (newIndex) => {
    chooseSalt(newIndex)
  })
})

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

import nipahSachet from "../assets/sampling/labumbu-sachet-garam-nipah.png"
import kuwuSachet from "../assets/sampling/labumbu-sachet-garam-bledug-kuwu.png"
import tejakulaSachet from "../assets/sampling/labumbu-sachet-garam-tejakula.png"
import krayanSachet from "../assets/sampling/labumbu-sachet-garam-krayan.png"
import amedSachet from "../assets/sampling/labumbu-sachet-garam-amed.png"
import kusambaSachet from "../assets/sampling/labumbu-sachet-garam-kusamba.png"


const productSlide = [
  { id: 1, alt: 'labumbu sachet garam tejakula', img: tejakulaSachet, title: 'Tejakula Salt' },
  { id: 2, alt: 'labumbu sachet garam kusamba', img: kusambaSachet, title: 'Kusamba Salt' },
  { id: 3, alt: 'labumbu sachet garam amed', img: amedSachet, title: 'Amed Salt' },
  { id: 4, alt: 'labumbu sachet garam nipah', img: nipahSachet, title: 'Nipah Salt' },
  { id: 5, alt: 'labumbu sachet garam krayan', img: krayanSachet, title: 'Krayan Salt' },
  { id: 6, alt: 'labumbu sachet garam bledug kuwu', img: kuwuSachet, title: 'Bledug Kuwu Salt' },
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
    text: 'Complete the short form so we know who to send it.'
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
  speed: 1500,
  drag: 'free',
  snap: true
}

const mobileOpt = {
  pagination: false,
  rewind: true,
  type: 'loop',
  padding: '4rem',
  autoplay: true,
  interval: 5000,
  speed: 1500,
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