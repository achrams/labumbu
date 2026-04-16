<template>
  <div v-if="showCountdown" class="text-white px-8 py-4 w-full bg-[#AA2123] text-center uppercase font-bold z-50">
    <vue-countdown :time="timeLeft" v-slot="{ days, hours, minutes, seconds }">
      <div class="flex items-center justify-center md:justify-evenly gap-2 flex-wrap md:flex-nowrap">
        <div class="text-xs md:text-xl w-full md:w-fit">The Early Bird Hampers Box offer ends in:</div>
        <div class="text-xs md:text-xl text-center flex flex-col items-center">
          <div>{{ days }}</div>
          <div>days</div>
        </div>
        <div class="text-xs md:text-xl text-center flex flex-col items-center">
          <div>{{ hours }}</div>
          <div>hours</div>
        </div>
        <div class="text-xs md:text-xl text-center flex flex-col items-center">
          <div>{{ minutes }}</div>
          <div>minutes</div>
        </div>
        <div class="text-xs md:text-xl text-center flex flex-col items-center">
          <div>{{ seconds }}</div>
          <div>seconds</div>
        </div>
      </div>
    </vue-countdown>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const targetDate = new Date('2025-12-22T23:59:59').getTime()
const timeLeft = ref(targetDate - Date.now())
const showCountdown = ref(false)
setInterval(() => {
  timeLeft.value = targetDate - Date.now()
  if (timeLeft.value > 0) showCountdown.value = true
  else if (timeLeft.value <= 0) showCountdown.value = false
}, 1000)
</script>