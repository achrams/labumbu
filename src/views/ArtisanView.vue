<template>
  <div class="w-full min-h-screen flex flex-col items-center bg-[rgb(242,218,192)]">
    <div class="w-full h-full relative">
      <div class="w-full h-fit mt-20">
        <div class="h-full w-full flex flex-col justify-end lg:items-center">
          <div class="w-full p-8 md:p-16">
            <div class="w-full flex items-center justify-between">
              <div class="w-1/4 lg:w-1/3">
                <img class="w-full" src="../assets/icon/rectangle_item.png" alt="rect_item_1">
              </div>
              <div class="flex items-center gap-1">
                <img class="w-24 md:w-32" src="../assets/icon/artisan_salt_black.png" alt="artisan_salt_title_black">
              </div>
              <div class="w-1/4 lg:w-1/3">
                <img class="w-full" src="../assets/icon/rectangle_item.png" alt="rect_item_2">
              </div>
            </div>
            <div class="mt-8 lg:mt-12 w-full"><img class="w-full" src="../assets/bg/artisan_detail.png"
                alt="artisan-head"></div>
          </div>
          <div class="w-full text-center px-8 md:px-16">
            <h1 class="text-xl md:text-2xl lg:text-4xl">Warisan dari Alam & Tradisi</h1>
            <div>
              <p class="text-lg mt-8">Di setiap butir garam, tersimpan kisah panjang tentang alam dan tradisi. Dari
                pantai
                Amed hingga
                Tejakula, masyarakat pesisir Bali masih menjaga cara lama dalam membuat garam: menimba air laut murni,
                menjemurnya dengan sabar, dan memanen kristal putih alami yang sarat mineral.</p>
              <p class="text-lg mt-8">Labumbu menghadirkan Artisan Salt, koleksi garam pilihan dari berbagai penjuru
                Nusantara. Dibuat dengan
                tangan dan hati, tanpa campuran buatan, tanpa pengawet, dan tanpa pewarna. Setiap varian memiliki
                karakter rasa yang khas—mewakili laut, tanah, dan budaya tempatnya berasal.</p>
              <p class="text-lg mt-8">Dengan kemasan higienis dan praktis, Artisan Salt bukan hanya bumbu dapur, tapi
                juga warisan rasa yang bisa kamu hadirkan di meja makan.</p>
            </div>
          </div>
          <div class="w-full mt-8 lg:mt-24">
            <div
              class="bg-[#3F4B35] font-[Kaisei] text-white text-xl lg:text-4xl w-fit py-4 px-12 lg:px-46 relative -40">
              Garam
              Tejakula</div>
            <div class="w-full flex flex-col md:flex-row">
              <!-- <img class="absolute z-0 w-full h-[30rem] object-cover left-0 hidden md:block -mt-10"
                src="../assets/artisan/beach 2.png" alt="pantai"> -->
              <div class="w-full md:w-1/3">
                <div class="lg:p-16 relative flex items-end justify-end">
                  <img class="absolute z-0 w-full md:hidden" src="../assets/artisan/beach 2.png" alt="pantai">
                  <img class="w-2/5 p-2 md:w-full z-30 relative" src="../assets/artisan/JAR_TEJAKULA_I.png"
                    alt="Artisan Tejakula">
                </div>
              </div>
              <div class="w-full md:w-2/3 p-4 md:p-16 mt-4 relative z-40">
                <p class="leading-loose text-justify text-md lg:text-xl">
                  {{ para[0] }}
                </p>
                <div class="my-2 flex justify-center md:justify-start">
                  <button
                    class="bg-[#AA2123] underline hover:bg-[#80181a] px-8 py-2 w-fit font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/articles/garam-tejakula')">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-8 lg:mt-24 flex flex-col items-end">
            <div
              class="bg-[#3F4B35] font-[Kaisei] text-white text-xl lg:text-4xl w-fit py-4 px-12 lg:px-46 relative z-50">
              Garam
              Kusamba</div>
            <div class="w-full flex flex-col md:flex-row relative h-fit">
              <!-- <img class="absolute z-0 w-3/5 right-0 hidden md:block -mt-20" src="../assets/artisan/nelayan.png"
                alt="pantai"> -->
              <div class="w-full md:w-1/3 relative z-40 md:order-2 order-1">
                <div class="lg:p-16 relative flex items-end justify-start">
                  <img class="absolute z-0 w-full md:hidden" src="../assets/artisan/nelayan.png" alt="pantai">
                  <img class="w-2/5 p-2 md:w-full z-30 relative" src="../assets/artisan/JAR_KUSAMBA.png"
                    alt="Artisan Kusamba">
                </div>
              </div>
              <div class="w-full md:w-2/3 p-4 md:p-16 mt-4 relative z-40 md:order-1 order-2">
                <p class="leading-loose text-justify text-md lg:text-xl">
                  {{ para[1] }}
                </p>
                <div class="my-2 flex justify-center md:justify-start">
                  <button
                    class="bg-[#AA2123] underline hover:bg-[#80181a] px-8 py-2 w-fit font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/articles/garam-kusamba')">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-8 lg:mt-24">
            <div
              class="bg-[#3F4B35] font-[Kaisei] text-white text-xl lg:text-4xl w-fit py-4 px-12 lg:px-46 relative z-40">
              Garam
              Amed</div>
            <div class="w-full flex flex-col md:flex-row">
              <!-- <img
                class="absolute z-0 w-full h-[30rem] object-cover left-0 hidden md:block -mt-10 transform scale-x-[-1]"
                src="../assets/artisan/petani1.png" alt="petani1"> -->
              <div class="w-full md:w-1/3">
                <div class="lg:p-16 relative flex items-end justify-end">
                  <img class="absolute z-0 w-full md:hidden" src="../assets/artisan/petani1.png" alt="petani1">
                  <img class="w-2/5 p-2 md:w-full z-30 relative" src="../assets/artisan/JAR_AMED.png"
                    alt="Artisan Tejakula">
                </div>
              </div>
              <div class="w-full md:w-2/3 p-4 md:p-16 mt-4 relative z-40">
                <p class="leading-loose text-justify text-md lg:text-xl">
                  {{ para[2] }}
                </p>
                <div class="my-2 flex justify-center md:justify-start">
                  <button
                    class="bg-[#AA2123] underline hover:bg-[#80181a] px-8 py-2 w-fit font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/articles/garam-amed')">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full mt-8 lg:mt-24 flex flex-col items-end">
            <div
              class="bg-[#3F4B35] font-[Kaisei] text-white text-xl lg:text-4xl w-fit py-4 px-12 lg:px-46 relative z-50">
              Garam
              Bledug Kuwu</div>
            <div class="w-full flex flex-col md:flex-row relative h-fit">
              <!-- <img class="absolute z-0 w-auto h-[35rem] right-0 hidden md:block -mt-20"
                src="../assets/artisan/bleduk.png" alt="bleduk1"> -->
              <div class="w-full md:w-1/3 relative z-40 md:order-2 order-1">
                <div class="lg:p-16 relative flex items-end justify-start">
                  <img class="absolute z-0 w-full md:hidden" src="../assets/artisan/bleduk.png" alt="bleduk2">
                  <img class="w-2/5 p-2 md:w-full z-30 relative" src="../assets/artisan/JAR_KUSAMBA.png"
                    alt="Artisan Kusamba">
                </div>
              </div>
              <div class="w-full md:w-2/3 p-4 md:p-16 mt-4 relative z-40 md:order-1 order-2">
                <p class="leading-loose text-justify text-md lg:text-xl">
                  {{ para[3] }}
                </p>
                <div class="my-2 flex justify-center md:justify-start">
                  <button
                    class="bg-[#AA2123] underline hover:bg-[#80181a] px-8 py-2 w-fit font-[FigTree] text-[#F2DAC0] text-md cursor-pointer"
                    @click="toPage('/articles/garam-bledug-kuwu')">Baca Selengkapnya</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <Footer />
    </div>
  </div>
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import { useRouter } from 'vue-router';
import { useDataStore } from '@/stores';
const store = useDataStore()
const router = useRouter()

const toPage = (val) => {
  router.push(val)
}

const truncateText = (text) => {
  return text.slice(0, 150) + '...'
}

const para = ['Dari desa Buleleng Bali Utara, Tejakula hadir garam yang lahir dari kesabaran dan ketekunan petani garam. Dengan metode turun - temurun, air laut disaring melalui pasir hitam sebelum dijemur. Hasilnya adalah garam lembut dengan kandungan mineral alami, memberikan rasa gurih yang halus dan seimbang. Sering dipakai untuk masakan sehat maupun kuliner khas Bali.', 'Garam Kusamba -Klungkung, Bali dikenal sebagai salah satu sentra garam tertua di Bali. Petani garam di sini menggunakan batang kelapa sebagai media pengeringan, menciptakan kristal garam yang besar dan berkilau. Garam Kusamba punya rasa asin yang lebih tajam dengan aroma laut yang khas, cocok untuk hidangan seafood atau sambal tradisional.', 'Di pesisir Amed, laut biru dan pasir hitam vulkanik berpadu menciptakan garam dengan karakter unik. Prosesnya masih tradisional: air laut ditampung, dijemur di atas papan kayu, lalu perlahan berubah menjadi kristal garam putih. Garam Amed terkenal dengan teksturnya yang renyah dan rasa laut yang kuat—cocok sebagai finishing touch pada masakan.', 'Di sebuah sudut wilayah Kabupaten Grobogan, Jawa Tengah, terdapat sebuah fenomena alam unik bernama Bledug Kuwu. Dari kejauhan, suara letupan lumpur yang menggema terdengar seperti detak jantung bumi, mengingatkan siapa pun yang mendengar bahwa tanah ini hidup dan bernafas. Tak hanya menjadi daya tarik wisata, Bledug Kuwu adalah nadi kehidupan bagi orang-orang yang tinggal di sekitarnya.']
</script>