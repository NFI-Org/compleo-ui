<script setup>
import { toRefs } from 'vue'
import ToDoData from './TodoListItem.vue'
import ProfileHeading from './ProfileHeading.vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

// const loading = ref(true)
// const username = ref('')
// const website = ref('')
// const avatar_url = ref('')

// onMounted(() => {
//   getProfile()
// })

// async function getProfile() {
//   try {
//     loading.value = true
//     const { user } = session.value

//     let { data, error, status } = await supabase
//       .from('profiles')
//       .select(`username, website, avatar_url`)
//       .eq('id', user.id)
//       .single()

//     if (error && status !== 406) throw error

//     if (data) {
//       username.value = data.username
//       website.value = data.website
//       avatar_url.value = data.avatar_url
//     }
//   } catch (error) {
//     alert(error.message)
//   } finally {
//     loading.value = false
//   }
// }
</script>

<template>
  
  <Suspense>
    <ProfileHeading :username="session.user.email" />
  </Suspense>
  
  <Suspense>
    <ToDoData :userid="session.user.id" />
  </Suspense>
  
</template>