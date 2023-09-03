<script setup>
import { ref, toRefs, onMounted } from 'vue'
import ToDoData from './TodoListItem.vue'
import ProfileHeading from './ProfileHeading.vue'
import ProfileInformation from './ProfileInformation.vue'
import ProfileCreation from './ProfileCreation.vue'
import { getProfile, isProfileExists, name, email , website, userid } from '../utils/useAuth'

const props = defineProps(['session'])
const isProfileView = ref(false)
const { session } = toRefs(props)
function enableProfileView() {
  isProfileView.value = true
}
function disableProfileView() {
  isProfileView.value = false
}
onMounted(() => {
  getProfile(session)
})
</script>

<template>
  <Suspense>
    <div v-if="isProfileExists === false" >
    <ProfileCreation :email="email" :userid="userid" />
    </div>
    <div v-else>
    <ProfileHeading @enable-profile-view="enableProfileView"/>
    <ToDoData v-if="isProfileView === false" :userid="userid"/>
    <ProfileInformation v-if="isProfileView === true" :name="name" :website="website" :email="email" @disable-profile-view="disableProfileView" />
    </div>
 
  </Suspense>
  
</template>