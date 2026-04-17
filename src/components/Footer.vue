<template>
  <div class="w-full px-4 p-8 z-50">
    <div class="w-full mt-8 mb-2 text-justify md:text-center leading-relaxed p-0 font-md md:p-4">
      <div class="text-lg">
        La Bumbu by PT Aluna Daya Ciptarasa brings you premium natural salts directly sourced from the rich landscapes
        of
        Indonesia.
      </div>
      <div class="text-lg">
        With a commitment to quality, sustainability, and purity, we work directly with local farmers and
        preserve traditional methods passed down through generations.</div>
    </div>
    <div class="p-4 hidden md:block"><img class="w-full" src="../assets/icon/longrect.png" alt="garis_panjang"></div>
    <div class="w-full flex flex-wrap px-0 lg:px-8">
      <div class="flex flex-col order-1">
        <div class="my-4 z-20 w-full lg:w-3/5">
          <div class="nav-font text-black text-md font-bold cursor-pointer text-md z-20 w-fit">Address</div>
          <div class="text-sm">Jl. Cililitan Besar No.2, Kb. Pala, Kec. Makasar, Kota Jakarta Timur, Daerah
            Khusus Ibukota Jakarta</div>
        </div>
        <div class="my-4 z-20 order-2 w-full lg:w-3/5">
          <div class="nav-font text-black text-md font-bold cursor-pointer text-md z-20 w-fit">Contact</div>
          <div class="text-sm">+62 822-4669-0250</div>
          <div class="text-sm">labumbu.id@gmail.com</div>
        </div>
      </div>
      <div class="my-4 z-20 order-4 md:order-3 w-full lg:w-1/5 bg-red-2">
        <div class="nav-font text-black text-md font-bold text-md z-20 w-fit">Navigation</div>
        <div class="text-sm cursor-pointer" @click="toPage('/')">Home</div>
        <div class="text-sm cursor-pointer" @click="toPage('/artisan')">Artisan</div>
        <div class="text-sm cursor-pointer" @click="toPage('/sample')">Sample</div>
        <div class="text-sm cursor-pointer" @click="toPage('/hampers')">Hampers</div>
      </div>
      <!-- <div class="my-4 z-20">
        <div class="nav-font text-black text-md font-bold cursor-pointer text-md z-20 w-fit">Resources</div>
        <div class="text-sm">Home</div>
        <div class="text-sm">About Us</div>
        <div class="text-sm">Recipes</div>
      </div> -->
      <div class="my-4 z-20 order-3 md:order-4">
        <h5 class="text-center nav-font text-black text-md font-bold">Follow Us</h5>
        <ul class="w-full mt-2 flex md:flex-col gap-3 md:gap-1 items-end md:items-start">
          <!-- <li class="flex gap-2 items-center">
            <img class="cursor-pointer z-20 h-4" src="../assets/icon/fb.png" alt="facebook">
            <h6 class="text-sm hidden md:block">Facebook</h6>
          </li> -->
          <li class="mt-2 flex gap-2 items-center" @click="toSite('https://instagram.com/labumbu.id')">
            <img class="cursor-pointer z-20 h-4" src="../assets/icon/ig.png" alt="instagram">
            <h6 class="text-sm hidden md:block cursor-pointer">Instagram</h6>
          </li>
          <li class="mt-2 flex gap-2 items-center" @click="toSite('https://tiktok.com/@labumbu.id')">
            <img class="cursor-pointer z-20 h-4" src="../assets/icon/tiktok.png" alt="tiktok">
            <h6 class="text-sm hidden md:block cursor-pointer">Tiktok</h6>
          </li>
          <!-- <li class="mt-2 flex gap-2 items-center">
            <img class="cursor-pointer z-20 h-4" src="../assets/icon/youtube.png" alt="youtube">
            <h6 class="text-sm hidden md:block">Youtube</h6>
          </li> -->
        </ul>
      </div>
    </div>

    <div class="text-center md:text-left text-black text-xs p-0 lg:px-8">
      <p>© 2025 Labumbu. All rights reserved.</p>
    </div>
    <!-- <div class="w-full flex justify-center md:justify-end gap-3 text-black text-xs">
      <h6>Privacy Policy</h6>
      <h6>Term of Service</h6>
      <h6>Cookie Policy</h6>
    </div> -->
    <!-- <img src="../assets/sampling/foot.png" alt="footer-image" class="w-full h-auto bottom-0 absolute"> -->
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const toPage = (path) => {
  router.push(path)
}

const toSite = (url) => {
  window.open(url, '_blank')
}
</script>