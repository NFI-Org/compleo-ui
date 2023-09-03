<script setup>
import { ref } from 'vue'
import { handleLogin,handleSignup,isSignUpSuccess } from '../utils/useAuth'

const email = ref('')
const password = ref('')

</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="../assets/logo/compleo.svg" alt="Your Company" />
      <h2 v-if="isSignUpSuccess === true" class="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">Please verify your email through the link sent to your inbox to finish the sign up process.</h2>
      <h2 v-else class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div v-if="isSignUpSuccess === false" class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6"  @submit.prevent="handleLogin({ email, password })">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" v-model="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <!-- <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a> -->
            </div>
          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <input type="submit" 
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          value="Sign in"
          />
        </div>
      </form>
      <form class="m-6 space-y-6"  @submit.prevent="handleSignup({ email, password })">
      <div>
          <input type="submit" 
          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          value="Not a member? Sign up"
          />
        </div>
      </form>
    </div>
  </div>
</template>