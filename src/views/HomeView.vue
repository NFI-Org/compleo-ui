<script setup>
import { onMounted, ref } from 'vue'
import Account from '../components/AccountManagement.vue'
import Auth from '../components/AuthManagement.vue'
import { supabase } from '../lib/supabaseClient'

const session = ref()
onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <div class="mx-auto container" >
    <Suspense>
      <Account v-if="session" :session="session" />
      <Auth v-else />
    </Suspense>
  </div>
</template>