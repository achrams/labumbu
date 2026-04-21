<template>
  <div class="w-full min-h-screen fixed z-50 bg-black/80 flex justify-center items-start lg:items-center">
    <div
      class="w-3/4 lg:w-1/2 min-h-max lg:min-h-9/12 h-fit rounded-2xl lg:rounded-4xl bg-white flex flex-col items-center relative mt-12 lg:mt-0">
      <div class="w-full px-4 py-8 flex justify-center ">
        <div class="w-24 lg:w-32">
          <img src="../assets/logo/labumbu-orange.png" alt="labumbu-logo-form">
        </div>
        <div class="absolute top-0 right-0 py-8 px-8 lg:px-12" @click="toggleModal">
          <img class="w-4 lg:w-6 cursor-pointer hover:scale-110 duration-100 delay-75" src="../assets/icon/close.png"
            alt="labumbu-close-form">
        </div>
      </div>
      <div class="px-8 lg:px-12">
        <h2 class="font-extrabold text-sm lg:text-3xl text-center">
          Approved by Lab, Tasted by Nutritionists. Try Sample Now.
        </h2>
      </div>
      <div class="w-full px-8 lg:px-12 flex flex-wrap lg:flex-nowrap gap-2 mt-6 lg:mt-8">
        <div class="w-full lg:w-1/2">
          <input type="text" placeholder="First Name *" class="p-2 lg:p-4 w-full border-2 rounded-2xl"
            v-model="firstName">
        </div>
        <div class="w-full lg:w-1/2">
          <input type="text" placeholder="Last Name *" class="p-2 lg:p-4 w-full border-2 rounded-2xl"
            v-model="lastName">
        </div>
      </div>
      <div class="w-full px-8 lg:px-12 mt-2 lg:mt-4">
        <input type="text" placeholder="Email *" class="p-2 lg:p-4 w-full border-2 rounded-2xl" v-model="email">
      </div>
      <div class="w-full px-8 lg:px-12 flex gap-2 mt-2 lg:mt-4">
        <div class="w-1/3 lg:w-1/4">
          <input type="text" placeholder="country code *" disabled="true" class="p-2 lg:p-4 w-full border-2 rounded-2xl"
            v-model="countryCode">
        </div>
        <div class="w-2/3 lg:w-3/4">
          <input type="tel" placeholder="Phone Number *" class="p-2 lg:p-4 w-full border-2 rounded-2xl"
            v-model="phoneNumber">
        </div>
      </div>
      <div class="w-full px-8 lg:px-12 flex items-center gap-2 mt-4">
        <div class="w-1/10">
          <input type="checkbox" class="w-full p-4" v-model="agreed">
        </div>
        <div class="w-9/10 text-justify">
          <p class="text-gray-500 text-xs lg:text-md">I confirm that I am above 18 years and consent for data processing
            in brand
            promotions purpose only.*</p>
        </div>
      </div>
      <div class="w-full px-8 lg:px-12 flex items-center gap-2">
        <div class="w-1/10">
          <input type="checkbox" class="w-full p-4" v-model="subbed">
        </div>
        <div class="w-9/10 text-justify">
          <p class="text-gray-500 text-xs lg:text-md">I agree to receive newsletters and marketing communications from
            the brand.</p>
        </div>
      </div>
      <div class="w-full flex justify-center mt-4 mb-6 md:mb-8 px-8">
        <button
          :disabled="!agreed || firstName.length < 3 || lastName.length < 3 || email.length < 4 || phoneNumber.length < 4"
          class="py-3 px-4 w-full lg:w-3/4 rounded-4xl bg-black text-white shadow-sm shadow-black cursor-pointer disabled:cursor-default disabled:bg-gray-700"
          @click.prevent="submitForm">
          <div v-if="!loadingSubmit">Submit</div>
          <div v-else class="animate-pulse">Loading</div>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useDataStore } from '@/stores';

const store = useDataStore();

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const countryCode = ref('+62')
const phoneNumber = ref('')
const agreed = ref(false)
const subbed = ref(false)
const loadingSubmit = ref(false)


const toggleModal = () => {
  store.toggleSampleModal()
}

const toggleNotif = (status, message) => {
  store.setNotifPayload({ status, message })
  store.toggleSampleNotif()
}

const submitForm = async () => {
  loadingSubmit.value = true

  const dataForm = {
    firstname: firstName.value,
    lastname: lastName.value,
    email: email.value,
    countrycode: countryCode.value,
    phone: phoneNumber.value,
    subbed: subbed.value
  }


  try {
    await fetch('https://script.google.com/macros/s/AKfycbw9kpcv65BSjFNBU5QzYmZPrtfn9QZRMNokvYTHRz6XwsxBH5FwAEzZZni8K1g3li6R/exec?action=submit', {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataForm)
    })
      .then(res => {
        console.log(res)
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        phoneNumber.value = ''
        subbed.value = false
        agreed.value = false
        loadingSubmit.value = false
        fbq('track', 'Lead')
        toggleModal()
        toggleNotif(
          true,
          'We will be contacting you soon. Follow our social media to catch our next updates.'
        )
      })
      .catch(err => {
        console.log(err)
        loadingSubmit.value = false
      })
    // reset form

  } catch (err) {
    console.log(err)
  }
}
</script>