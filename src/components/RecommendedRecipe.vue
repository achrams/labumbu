<template>
  <div class="w-full">
    <div v-if="recipeList" class="flex flex-wrap gap-4 justify-items-start py-8 w-full">
      <div v-for="recipes in recipeList" :key="recipes.id"
        class="flex flex-col justify-between w-40 h-64 md:w-44 md:h-72 cursor-pointer">
        <div class="w-full h-56 md:h-60 rounded-xl flex items-center justify-center">
          <img class="h-full object-cover" :src="recipes.image" :alt="recipes.name">
        </div>
        <div class="w-full flex justify-center gap-1 py-1">
          <h5 class="text-xs md:text-sm font-semibold">{{ recipes.title }}</h5>
        </div>
        <div class="px-2 py-1 bg-[#C54827] text-[#F2DAC0] font-[BetterSeason] text-xs text-center rounded-lg"
          @click="cook(recipes.id)">Masak
          Sekarang</div>
      </div>
    </div>
    <div v-else class="flex py-8 h-64 items-center justify-center">
      No recommended recipess available.
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineProps({
  recipeList: {
    type: Array,
    default: () => [],
  },
});

const cook = (id) => {
  router.push('/recipes/' + id)
}
</script>