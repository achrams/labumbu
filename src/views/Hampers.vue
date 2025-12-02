<template>
  <div class="w-full h-full min-h-screen lg:min-h-[950px] flex flex-col items-center bg-[#F2DAC0] relative">
    <div class="w-1/2 md:w-1/4 lg:w-1/6 p-4 mt-12">
      <img src=" ../assets/logo/labumbu-orange.png" alt="Labumbu Logo">
    </div>
    <div class="w-full z-30 p-4 md:p-8 lg:px-12 my-4 lg:my-2 flex flex-col items-center">
      <div class="text-center w-3/4 md:w-1/2 mt-12">
        <h2 class="text-[#3F4B35] font-[FigTree] text-xl md:text-2xl text-center">Hampers Premium, Kesan Tak
          Terlupakan</h2>
        <p class="text-[#3F4B35] font-[FigTree] text-center my-4">Hadirkan pengalaman memberi hadiah yang
          elegan, lezat, dan penuh kehangatan bersama Labumbu. Hampers Labumbu dibuat dengan cinta — kombinasi
          kualitas,
          rasa, dan tampilan yang memanjakan.</p>
      </div>
      <div
        class="flex flex-col md:flex-row items-center md:items-start justify-center p-0 md:p-8 mt-4 md:my-12 z-30 h-full lg:h-96">
        <div class="w-3/4 md:w-1/2 lg:w-1/4 z-30 px-4 h-full md:h-96">
          <img class="z-30 h-full w-full" :src="hampersList[selectedHamper].img"
            :alt="'hampers-' + hampersList[selectedHamper]">
        </div>
        <div class="w-3/4 md:w-1/2 lg:w-2/5 md:px-4 flex flex-col h-fit md:h-96 justify-between my-8 md:my-0">
          <div class="h-fit">
            <h2 class="text-[#3F4B35] font-[FigTree] text-xl md:text-2xl text-justify">{{
              hampersList[selectedHamper].name }}</h2>
            <p class="text-[#3F4B35] font-[FigTree] text-justify my-4">{{
              hampersList[selectedHamper].description }}</p>
          </div>
          <div class="text-[#3F4B35] text-2xl">
            <h5 class="my-4">{{ toIDR(hampersList[selectedHamper].price) }}</h5>
            <button
              class="bg-[#AA2123] hover:bg-[#80181a] px-4 py-2 w-full font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
              @click="orderItem(selectedHamper)">Beli Sekarang</button>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-3/4 flex gap-2 justify-center mt-4">
        <div class="w-1/4" v-for="(hamper, i) in hampersList" :key="hamper.id">
          <div class="cursor-pointer hover:scale-105 duration-100 delay-75">
            <img class="w-full object-cover h-auto md:h-64 " :src="hamper.img" :alt="hamper.name + '-image'"
              @click="selectedHamper = i">
            <h5 class="text-center">{{ hamper.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full absolute top-0 min-h-screen h-fit overflow-hidden">
      <div class="w-full flex justify-between">
        <img src="../assets/bg/lengkap.png" alt="lengkap kiri">
        <img src="../assets/bg/lengkapkanan.png" alt="lengkap kanan">
      </div>
    </div>
    <div class="p-4">
      <Footer />
    </div>
  </div>
</template>
<script setup>
import example1 from '@/assets/hampers/111.png'
import example2 from '@/assets/hampers/222.png'
import example3 from '@/assets/hampers/333.png'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
const hampersList = [
  {
    id: 1,
    name: 'Labumbu Box Hampers - Salt & Spices',
    price: 360000,
    description: 'Kemasan Unik dengan Kombinasi Garam & Bumbu Ideal untuk Variasi Masakan. Cocok untuk pengguna yang mencari variasi dalam masakan. Spices: Cabai Bubuk, Lada Putih Bubuk, Lada Hitam Bubuk. Salt: Garam Tejakula, Garam Kusamba, Garam Bledugkuwu.',
    img: example1
  },
  {
    id: 2,
    name: 'Labumbu Hampers Roll',
    price: 247000,
    description: 'Hampers Nipah Salt dengan kemasan roll yang praktis dan mudah dibawa, cocok sebagai hadiah istimewa yang fungsional dan berkesan.',
    img: example2
  },
  {
    id: 3,
    name: 'Labumbu DIY Hampers',
    price: 375000,
    description: 'Spices Kemasan Praktis untuk Memasak Lengkap dengan Lada Putih, Lada Hitam, Bawang Putih, Cabai, Ketumbar, dan Kunyit Bubuk.',
    img: example3
  }
]

const selectedHamper = ref(0)

const toIDR = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(price);
}

const orderItem = (index) => {
  const encodedMessage = encodeURIComponent(`Halo, saya ingin order produk ${hampersList[index].name}`);
  const url = `https://wa.me/6281286861661?text=${encodedMessage}`
  window.open(url, "_blank");
}

</script>
<style>
.dark-oak {
  background: url('../assets/darkoak.jpg');
  background-size: cover;
}
</style>