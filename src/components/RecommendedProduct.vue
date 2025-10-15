<template>
  <div class="w-full overflow-x-auto">
    <!-- Flex container -->
    <div v-if="productList" class="flex gap-4 py-8 flex-nowrap min-w-fit">
      <!-- Product cards -->
      <div v-for="product in productList" :key="product.id"
        class="flex flex-col justify-between w-40 h-64 md:w-44 md:h-72 flex-shrink-0 cursor-pointer">
        <div class="w-full h-56 md:h-60 bg-white rounded-xl flex items-center justify-center p-2">
          <img class="h-full" :src="product.image" :alt="product.name">
        </div>
        <div class="w-full flex justify-center gap-1 py-1">
          <h5 class="text-xs md:text-sm font-semibold">{{ product.name }}</h5>
        </div>
        <div class="px-2 py-1 bg-[#C54827] text-[#F2DAC0] font-[BetterSeason] text-xs text-center rounded-lg"
          @click="buy(product.shop_url)">Beli
          Sekarang</div>
      </div>
    </div>
    <div v-else class="flex py-8 h-64 items-center justify-center">
      No recommended products available.
    </div>
  </div>
</template>
<script setup>
defineProps({
  productList: {
    type: Array,
    default: () => [],
  },
});

const buy = (url) => {
  window.open(url, '_blank')
}
</script>