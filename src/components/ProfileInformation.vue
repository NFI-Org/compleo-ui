<template>
  <div>
    <div class="mx-auto mt-5 text-center px-4 sm:px-0">
      <h3 class="text-base font-semibold leading-7 text-gray-900">Compleo - Profile</h3>
      <p class="mt-1 text-sm leading-6 text-gray-500">Personal details</p>
    </div>
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="mx-auto max-w-2xl px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Name</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ name }}</dd>
        </div>
        <div class="mx-auto max-w-2xl px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ email }}</dd>
        </div>
        <div class="mx-auto max-w-2xl px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt class="text-sm font-medium leading-6 text-gray-900">Website</dt>
          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ website }}</dd>
        </div>
      </dl>
    </div>
    <div class="mx-auto mt-5 text-center px-4 sm:px-0">
      <span @click="$emit('disableProfileView')" class="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold border-2 border-indigo-600 text-black shadow-sm hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <HomeModernIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Home
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps(['email','name','website'])
import {
  HomeModernIcon,
} from '@heroicons/vue/20/solid'

</script>