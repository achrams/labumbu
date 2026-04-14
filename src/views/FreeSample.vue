<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />
    <div class="w-full lg:min-h-screen flex flex-col items-center justify-center relative">
      <div class="w-full relative lg:absolute top-0 h-screen">
        <Splide :options="opt" aria-label="Artisan Salts Sampling Headers">
          <SplideSlide v-for="img in headerImages" :key="img.title">
            <img :src="img.url" :alt="img.title" class="w-full h-screen object-cover">
          </SplideSlide>
        </Splide>
      </div>
      <div class="w-full z-20 p-8 lg:pt-4 lg:px-24 h-max lg:h-max bg-[#D5B99B] lg:bg-transparent">
        <div class="w-full lg:w-3/7 flex flex-col justify-between items-center lg:items-start gap-10 mt-0">
          <h1
            class="font-extrabold text-white text-4xl lg:text-5xl text-start md:text-center lg:text-start [text-shadow:0_0_10px_rgba(0,0,0,0.8)]">
            Discover Hidden Treasures from Indonesia’s Nature, Brought Into Your Daily Cooking Through Salt
          </h1>
          <a href="#sample-here"
            class="flex flex-col lg:flex-row items-center gap-2 [text-shadow:0_0_10px_rgba(0,0,0,0.8)] text-white font-semibold text-4xl z-20 w-fit cursor-pointer py-2"
            v-smooth-scroll>Get Free Sample
            <img class="w-7 mt-2 animate-bounce duration-1000 [text-shadow:0_0_10px_rgba(0,0,0,0.8)]"
              src="../assets/icon/chevron-down.png" alt="up-btn"></a>
        </div>
      </div>
    </div>
    <div class="w-full min-h-screen flex flex-col items-center justify-end relative lg:mt-57">
      <img class="w-full object-cover object-right absolute z-10 h-screen lg:h-auto"
        src="../assets/sampling/second.jpeg" alt="second-sample-image-header">
      <div class="w-full h-24 z-40 absolute top-0 -mt-28" id="sample-here"></div>
      <div class="w-full z-20 p-8 lg:p-24 mb-0 lg:mb-40 h-max lg:h-max">
        <div class="w-full lg:w-1/3 h-max bg-white px-8 pt-12 pb-10 flex flex-col gap-10">
          <h3 class="text-3xl lg:text-5xl font-extrabold">Try Nature’s <br> Truest Flavor.</h3>
          <p>Experience the purity of natural salt with carefully sourced artisan salt from Indonesia. For each free
            sample, discover how real purity brings out the true flavor of your cooking, without impurities getting
            in
            the way.</p>
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
import { useDataStore } from '@/stores';
const store = useDataStore();

import Footer from '@/components/Footer.vue';
import FormInput from '@/components/FormInput.vue';
import { computed } from 'vue';
import SampleNotification from '@/components/SampleNotification.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import first from '../assets/sampling/first.jpeg'
import second from '../assets/sampling/first2.jpeg'
import third from '../assets/sampling/first3.jpeg'
import forth from '../assets/sampling/first4.jpeg'

const headerImages = [
  { url: first, title: 'labumbu-sampling-header-one' },
  { url: second, title: 'labumbu-sampling-header-two' },
  { url: third, title: 'labumbu-sampling-header-three' },
  // { url: forth, title: 'labumbu-sampling-header-four' },
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
  arrows: false,
  autoplay: true,
  interval: 3000
}

</script>