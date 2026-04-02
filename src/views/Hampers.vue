<template>
  <div
    class="w-full h-full min-h-screen lg:min-h-[950px] flex flex-col items-center relative overflow-hidden bg-[#AA2123]">
    <div class="w-full h-full md:h-screen object-cover relative overflow-hidden z-30">
      <div class="w-full h-fit absolute z-20">
        <div class="w-full absolute bg-black/40 h-full"></div>
        <img class="h-auto z-30" src="../assets/hampers/header.jpg" alt="header-hampers-page">
      </div>
      <img class="h-auto z-30" src="../assets/hampers/header.jpg" alt="header-hampers-page">
    </div>
    <div class="bg-gradient-to-b from-[#26190E] via-transparent absolute top-0 w-full"></div>

    <div class="w-full px-8 lg:h-screen flex flex-col items-center justify-center absolute mt-24 md:mt-12 z-50">
      <transition name="slide-up">
        <h1 v-if="playTitle[0]"
          class="text-xl md:text-3xl lg:text-4xl text-white text-center font-[Kaisei] font-semibold">Celebrate the
          Season
          with
          Labumbu Hampers</h1>
      </transition>
      <transition name="slide-up">
        <div v-if="playTitle[1]" class="w-full flex items-center justify-center py-4 mt-4 md:mt-32">
          <div class="w-fit">
            <button id="Lead" aria-label="Lead" name="Pre Order Now" v-smooth-scroll
              class="bg-[#AA2123] hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-white text-lg cursor-pointer"
              @click="scrollToHampersList">
              <div class="flex items-center gap-2 w-full">
                <h5 class="text-sm md:text-lg">Order Your Exclusive Hampers Now</h5><img class="w-4 md:w-8"
                  src="../assets/icon/arrow.png" alt="arrow-order">
              </div>
            </button>
          </div>
        </div>
      </transition>
      <div class="w-full px-4 py-12 text-white z-40 mt-[10vh] md:mt-24">
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
      <transition name="slide-up">
        <div v-if="playTitle[4]" class="h-36 z-40 md:hidden text-white text-center text-2xl">
          <h2>3 Most Meaningful Hampers Concepts
          </h2>
          <div class="w-full border-[#3F4B35]/50 border-b-4 mt-2"></div>
        </div>
      </transition>
    </div>
    <div class="w-full h-fit z-40 md:-mt-96 lg:-mt-0">
      <div class="h-42 md:h-24 z-50 hidden text-white text-center text-4xl mt-24 md:flex flex-col items-center">
        <h2>3 Most Meaningful Hampers Concepts
        </h2>
        <div class="w-1/2 border-[#3F4B35]/50 border-b-4 mt-4"></div>
      </div>
      <div class="w-full lg:w-full mt-[30rem] md:mt-30 px-8 z-40" id="hampers-list">
        <transition name="slide-up">
          <div v-if="playTitle[4]" class="w-full h-fit bg-[#3F4B35] pb-8 relative rounded-2xl">
            <div class="w-full flex items-center justify-center">
              <div
                class="rounded-full w-40 h-40 md:w-64 md:h-64 bg-[#3F4B35] -mt-12 md:-mt-18 flex flex-col items-center justify-center p-8">
              </div>
            </div>
            <div class="w-full -mt-24 px-8 pt-4 md:pt-0 flex justify-between flex-col md:flex-row gap-8">
              <div v-for="(hamper, index) in hampersList" :key="hamper.name + ' seharga ' + hamper.price"
                class="w-full md:w-1/3 bg-[#B11F24] p-2 rounded-2xl">
                <div class="p-4 flex flex-wrap items-center justify-center gap-2">
                  <img class="w-fit h-6" src="../assets/logo/labumbu-putih.png" alt="labumbu-putih">
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
                <div class="w-full h-fit md:min-h-96">
                  <div class="w-full flex flex-col gap-2 mt-2 p-4 md:p-2 lg:p-4">
                    <div v-for="(para, i) in hamper.description" :key="i"
                      class="text-justify text-white text-sm md:text-xs lg:text-sm">
                      <p>{{ para }}</p>
                    </div>
                  </div>
                  <div class="w-full flex flex-col gap-2 mt-2 p-4 md:p-2 lg:p-4">
                    <h5 class="mt-4 mb-2 text-white font-semibold">Core Contents :</h5>
                    <div v-for="(core, i) in hamper.coreContents" :key="'core-' + i"
                      class="text-justify text-white text-sm md:text-xs lg:text-sm">
                      <p>- {{ core }}</p>
                    </div>
                  </div>
                </div>
                <div class="w-full flex items-center justify-center py-4 mt-8 text-white">
                  <h6 class="text-wrap">{{ priceCalc(hamper.price) }}</h6>
                </div>
                <div class="w-full flex items-center justify-center py-4">
                  <div class="w-3/4">
                    <button id="Lead" aria-label="Lead" name="Pre Order Now"
                      class="bg-[#3F4B35] hover:bg-[#283022] rounded-2xl px-4 py-2 w-full font-[FigTree] text-white text-lg md:text-sm cursor-pointer"
                      @click="orderItem(index)">Pre Order Now</button>
                  </div>
                </div>
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
import { onMounted, onUnmounted, ref, inject } from 'vue'
const scrollY = ref(0)
const playTitle = ref([false, false, false, false, false])

const smoothScroll = inject('smoothScroll')
const handleScroll = () => {
  scrollY.value = window.scrollY
}

const scrollToHampersList = () => {
  const element = document.getElementById("hampers-list");
  smoothScroll({
    scrollTo: element
  })
}


const hampersList = [
  {
    id: 1,
    name: 'Hampers Box',
    price: 360000,
    description: ['A white hardbox designed to be transformed into a Ladder Board (Snakes and Ladders), complete with playing kits. A gift that brings joy!'],
    coreContents: [
      'Tejakula Salt (100gr)',
      'Bledug Kuwu Salt (100gr)',
      'Kusamba Salt (100gr)',
      'Black Pepper (50gr)',
      'Garlic Powder (50gr)',
      'Chili Powder (50gr)'
    ],
    img: [box1, box2]
  },
  {
    id: 2,
    name: 'Hampers Roll',
    price: 247000,
    description: ["Wrapped in premium calico fabric and logo ribbon. Features 100gr Nipah Salt, Labumbu's most exclusive signature salt."],
    coreContents: ['Nipah Salt (100gr) - Most Exclusive'],
    img: [roll1, roll2]
  },
  {
    id: 3,
    name: 'Hampers DIY',
    price: 375000,
    description: ['Artistic packaging resembling a Carousel / Christmas Tree. Perfect as a personal gift with high artistic and decorative value.'],
    coreContents: ['Turmeric Powder (60gr)', 'Garlic Powder (40gr)', 'White Pepper Powder (50gr)', 'Black Pepper Powder (50gr)', 'Chili Powder (50gr)', 'Coriander Powder (50gr)'],
    img: [diy1, diy2]
  }
]

const toIDR = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);
}

const priceCalc = (val) => {
  const today = new Date().getTime()
  const early = new Date('2025-12-22T23:59:59').getTime()
  if (today >= early) {
    return toIDR(val)
  }
  else {
    return `Early Bird Price: ${toIDR(val)}`
  }
}

const preOrder = () => {
  const encodedMessage = encodeURIComponent(`Halo, saya ingin order produk Labumbu Hampers`);
  const url = `https://wa.me/6281286861661?text=${encodedMessage}`
  window.open(url, "_blank");
}

const orderItem = (index) => {
  const encodedMessage = encodeURIComponent(`Halo, saya ingin order produk Labumbu ${hampersList[index].name}`);
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