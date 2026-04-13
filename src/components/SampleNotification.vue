<template>
  <div class="w-full min-h-screen fixed z-50 bg-black/80 flex justify-center items-center">
    <div class="w-3/4 lg:w-1/3 min-h-64 bg-white flex flex-col items-center rounded-2xl">
      <div class="w-32 p-4 mt-8">
        <img class="w-full" src="../assets/logo/labumbu-orange.png" alt="labumbu-logo-form">
      </div>
      <div class="w-24 lg:w-32 px-4">
        <img v-if="status" class="w-full" src="../assets/icon/success.png" alt="success-logo-notification">
        <img v-else class="w-full" src="../assets/icon/failed.png" alt="failed-logo-notification">
      </div>
      <div class="w-fit font-extrabold text-2xl">
        {{ status == true ? 'Success' : 'Failed' }}
      </div>
      <div class="w-full text-center px-6 mt-4">
        <h5 class="text-gray-500">{{ message }}</h5>
      </div>
      <div class="w-3/4 lg:w-1/3 mt-4 mb-8">
        <button @click="toggleNotif"
          class="w-full px-8 py-4 bg-[#387FB9] cursor-pointer rounded-4xl text-white shadow-md shadow-black font-extrabold">OK</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from '@/stores';
import { computed } from 'vue';

const store = useDataStore();

const status = computed(() => store.notifStatus)
const message = computed(() => store.notifMessage)

const toggleNotif = () => {
  store.setNotifPayload(false, '')
  store.toggleSampleNotif()
}
</script>