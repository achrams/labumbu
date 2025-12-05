<template>
  <div
    class="w-full h-full min-h-screen lg:min-h-[950px] flex flex-col items-center bg-[#B11F24] relative overflow-hidden">
    <div class="w-full h-72 md:h-screen object-cover relative overflow-hidden z-30">
      <div class="w-full h-full absolute bg-black/40 z-40"></div>
      <img class="h-auto z-30" src="../assets/hampers/header.jpg" alt="header-hampers-page">
    </div>
    <div class="bg-gradient-to-b from-[#26190E] via-transparent absolute top-0 w-full h-96"></div>
    <div class="w-full h-64 px-8 md:h-screen flex flex-col items-center justify-center absolute mt-4 z-40">
      <transition name="slide-up">
        <h1 v-if="playTitle[1]"
          class="text-xl md:text-3xl lg:text-4xl text-white text-center font-[Kaisei] font-semibold">Celebrate the
          Season
          with
          Labumbu Hampers</h1>
      </transition>
    </div>
    <div class="w-full px-4 py-12 text-white z-40 h-64">
      <transition name="slide-up">
        <h2 v-if="playTitle[2]" class="font-[Kaisei] text-center text-lg md:text-2xl">Special hampers crafted with a
          personal touch for
          family, friends,
          and colleagues.</h2>
      </transition>
      <transition name="slide-up">
        <h5 v-if="playTitle[3]" class="text-center mt-4">
          Deliver a refined and memorable gifting experience with Labumbu. Each hamper is meticulously crafted with
          love,
          blending superior quality, exquisite taste, and an elevated presentation.
        </h5>
      </transition>
    </div>
    <div class="w-full lg:w-full mt-30 px-8 z-40">
      <transition name="slide-up">
        <div v-if="playTitle[4]" class="w-full h-fit bg-[#3F4B35] pb-8 relative">
          <div class="w-full flex items-center justify-center">
            <div
              class="rounded-full w-40 h-40 md:w-64 md:h-64 bg-[#3F4B35] -mt-12 md:-mt-18 flex flex-col items-center justify-center p-8">
            </div>
          </div>
          <div class="w-full -mt-24 px-8 flex justify-between flex-col md:flex-row gap-8">
            <div v-for="(hamper, index) in hampersList" :key="hamper.name + ' seharga ' + hamper.price"
              class="w-full md:w-1/3">
              <div class="p-4">
                <h5 class="text-center text-2xl text-white">{{ hamper.name }}</h5>
              </div>
              <Splide :options="{
                type: 'loop', rewind: true, arrows: false, pagination: false, gap: 12, breakpoints: {
                  800: {
                    perPage: 1
                  },
                  480: {
                    perPage: 2
                  }
                }
              }" :aria-label="hamper.name + '-label'">
                <SplideSlide>
                  <img :src="hamper.img[0]" :alt="hamper.name + '-pertama'">
                </SplideSlide>
                <SplideSlide>
                  <img :src="hamper.img[1]" :alt="hamper.name + '-kedua'">
                </SplideSlide>
              </Splide>
              <div class="w-full flex flex-col gap-2 mt-2">
                <div v-for="(para, i) in hamper.description" :key="i" class="text-justify text-white text-sm">
                  <p>{{ para }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-center py-4 mt-8">
            <div class="w-3/4 md:w-1/6">
              <button id="Lead" aria-label="Lead" name="Pre Order Now"
                class="bg-[#AA2123] hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-white text-lg cursor-pointer"
                @click="preOrder">Pre Order Now</button>
            </div>
          </div>
          <div class="py-12 px-4 lg:px-32 text-white font-[FigTree] text-center text-sm md:text-xl">Ready to gift
            something truly
            special?
            Choose Labumbu’s premium hampers crafted with quality, flavor, and beautiful presentation. Make your gift
            unforgettable order yours today.
          </div>
          <div class="pb-8 pr-8 text-white text-center">
            <div>
              E-commerce:
            </div>
            <div>
              Shopee : <a class="underline"
                href="https://shopee.co.id/labumbu.id?categoryId=100629&entryPoint=ShopByPDP&itemId=53752257528">
                Shopee Labumbu.id
              </a>
            </div>
            <div>
              Tokopedia :  <a class="underline" href="https://tk.tokopedia.com/ZSfTuTM31/">
                Tokopedia Labumbu.id
              </a>
            </div>
            <div>
              WhatsApp : +62 812-8686-1661
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="w-full md:h-80 absolute md:hidden">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern.png" alt="pattern-1">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern2.png" alt="pattern-2">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern3.png" alt="pattern-3">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern.png" alt="pattern-1">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern2.png" alt="pattern-2">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern3.png" alt="pattern-3">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern.png" alt="pattern-1">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern2.png" alt="pattern-2">
      <img class="w-full h-auto md:h-auto object-cover" src="../assets/hampers/Pattern3.png" alt="pattern-3">
    </div>
    <div class="p-12 z-40">
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script setup>

import box1 from '@/assets/hampers/BOX1.jpeg'
import box2 from '@/assets/hampers/BOX2.jpeg'

import roll1 from '@/assets/hampers/ROLL1.jpg'
import roll2 from '@/assets/hampers/ROLL2.jpg'

import diy1 from '@/assets/hampers/DIY1.jpg'
import diy2 from '@/assets/hampers/DIY2.jpg'

import Footer from '@/components/Footer.vue'
import { onMounted, onUnmounted, ref } from 'vue'
const scrollY = ref(0)
const playTitle = ref([false, false, false, false, false])

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const hampersList = [
  {
    id: 1,
    name: 'Labumbu Hampers Box',
    price: 360000,
    description: ['A beautifully curated box filled with premium  Spices (Chili Powder, White Pepper Powder, Black Pepper Powder) and artisanal Salts (Tejakula, Kusamba, Bledug Kuwu).', 'Complete with a multifunction box that transforms into a fun Snakes & Ladders game plus an Adventure Play Kit (Marker, Dice, Pawns) included. A unique, flavorful, and memorable gift for anyone.'],
    img: [box1, box2]
  },
  {
    id: 2,
    name: 'Labumbu Hampers Roll',
    price: 247000,
    description: ['Make your gift stand out. This roll-style Nipah Salt hamper is functional, beautifully packaged, and perfect for anyone on your gifting list'],
    img: [roll1, roll2]
  },
  {
    id: 3,
    name: 'Labumbu Hampers DIY',
    price: 375000,
    description: ['A customizable hampers experience filled with premium essentials: White Pepper Powder, Black Pepper Powder, Garlic Powder, Chili Powder, Coriander Powder, and Turmeric Powder.', 'Create your own meaningful gift with flavors, creativity, and a personal touch. Perfect for those who love thoughtful, hands-on gifting.'],
    img: [diy1, diy2]
  }
]

const toIDR = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);
}

const preOrder = () => {
  const encodedMessage = encodeURIComponent(`Halo, saya ingin order produk Labumbu Hampers`);
  const url = `https://wa.me/6281286861661?text=${encodedMessage}`
  window.open(url, "_blank");
}

const orderItem = (index) => {
  const encodedMessage = encodeURIComponent(`Halo, saya ingin order produk ${hampersList[index].name}`);
  const url = `https://wa.me/6281286861661?text=${encodedMessage}`
  window.open(url, "_blank");
}

onMounted(() => {
  window.scrollTo(0, 0) // Reset scroll position saat halaman dimuat
  window.addEventListener('scroll', handleScroll)
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
<style>
.dark-oak {
  background: url('../assets/darkoak.jpg');
  background-size: cover;
}

.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 1s ease;
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
  transition: all 1s ease;
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
  transition: all 1s ease;
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