<template>
  <div class="w-full h-full min-h-screen bg-white">
    <FormInput v-if="showSampleModal" />
    <SampleNotification v-if="showSampleNotification" />
    <div class="w-full lg:min-h-screen flex flex-col items-center justify-center relative">
      <img class="w-full object-cover object-right relative lg:absolute z-10 h-[50vh] lg:h-auto"
        src="../assets/sampling/first.jpeg" alt="first-sample-image-header">
      <div class="w-full z-20 p-8 lg:px-24 h-max lg:h-max bg-[#D5B99B] lg:bg-transparent">
        <div class="w-full lg:w-1/3 flex flex-col justify-between items-center lg:items-start gap-10 mt-0 lg:mt-20">
          <h1 class="font-extrabold text-white text-4xl lg:text-4xl">
            Discover Hidden Treasures from Indonesia’s Nature, Brought Into Your Daily Cooking Through Salt
          </h1>
          <button class="text-white font-semibold text-2xl z-20 w-fit cursor-pointer px-4 py-2">
            <a href="#sample-here" class="flex flex-col lg:flex-row items-center gap-2">Get Free Sample <img
                class="w-7 mt-2 animate-bounce duration-1000" src="../assets/icon/chevron-down.png" alt="up-btn"></a>
          </button>
        </div>
      </div>
    </div>
    <div class="w-full min-h-screen flex flex-col items-center justify-end relative lg:mt-40">
      <img class="w-full object-cover object-right absolute z-10 h-screen lg:h-auto"
        src="../assets/sampling/second.jpeg" alt="second-sample-image-header">
      <div id="sample-here" class="w-full z-20 p-8 lg:p-24 h-max lg:h-max">
        <div class="w-full lg:w-1/3 h-max bg-white px-8 py-16 flex flex-col gap-10">
          <h3 class="text-3xl font-extrabold">#Try Nature’s Truest Flavor.</h3>
          <p>Experience the purity of natural salt with carefully sourced artisan salt from Indonesia. For each free
            sample, discover how real purity brings out the true flavor of your cooking, without impurities getting in
            the way.</p>
          <div class="w-full flex justify-center">
            <button
              class="w-max px-8 py-2 bg-black rounded-4xl text-lg text-white shadow-sm shadow-black cursor-pointer"
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

const showSampleModal = computed(() => store.showSampleModal)
const showSampleNotification = computed(() => store.showSampleNotification)

const toggleModal = () => {

  store.toggleSampleModal()
}

</script>