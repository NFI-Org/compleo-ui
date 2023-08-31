<template>
    <div class="lg:flex lg:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ username }}
            </h2>
        </div>
        <div class="mt-5 flex lg:ml-4 lg:mt-0">
            <span class="sm:ml-3">
                <button type="button"
                    class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="signOut">
                    <ArrowRightOnRectangleIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Sign Out
                </button>
            </span>
        </div>
    </div>
</template>
  
<script setup>
import { supabase } from '../lib/supabaseClient'
import { ref } from 'vue'

const loading = ref(true)
async function signOut() {
  try {
    loading.value = true
    let { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
defineProps(['username'])
import {
    ArrowRightOnRectangleIcon,
} from '@heroicons/vue/20/solid'
</script>