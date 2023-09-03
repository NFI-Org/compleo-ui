<template>
  <div class="isolate bg-white px-6 py-8">
    <!-- <div class="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true">
      <div
        class="relative left-1/2 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
      </div>
    </div> -->
    <div class="mx-auto max-w-2xl text-center">
      <p class="mt-2 text-lg leading-8 text-gray-600">Add your to-do items. Mark them as complete once finished.</p>
    </div>

    <div class="mx-auto mt-16 sm:mt-20 grid grid-cols-3 gap-x-8 gap-y-6">
      <div class="col-span-2">
        <input v-model="task" placeholder="What do you need to do?" type="text" name="task" id="task"
          autocomplete="task-for-the-day"
          class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
      </div>
      <div class="col-span-1">
        <button
          class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="button" @click="insertTask({ task, userid })">
          <PlusCircleIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />Add
        </button>
      </div>
    </div>

    <ul role="list" class="mx-auto max-w-xl sm:mt-20 divide-y divide-gray-100">
      <li v-for="(todo, index) in allTodos" :key="index" class="flex justify-between gap-x-6 py-5">

        <div class="w-full max-w-md p-2 lg:flex-shrink-0">
          <div
            class="rounded-2xl bg-gray-50 text-center ring-1 ring-inset ring-gray-900/5">
            <div class="max-w-xs px-6">
              <span class="pt-6 pb-3 flex font-semibold text-gray-400 justify-start gap-x-2">{{ formatDate(todo.inserted_at) }}</span>
              <p class="pt-3 pb-20 text-3xl font-semibold text-gray-600">{{ todo.task }}</p>
              <span class="pt-3 pb-6 flex items-baseline justify-start gap-x-2">
               <button type="button"
                    class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <CheckCircleIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Complete
                  </button>
                  <button type="button"
                    @click="deleteTodo(todo)"
                    class="inline-flex items-center rounded-md  px-3 py-2 text-sm font-semibold border-2 border-indigo-600 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <TrashIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                    Delete
                  </button>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>
<script setup>
import { ref } from 'vue'
import { addTodo, allTodos, fetchTodos, deleteTodo } from '../utils/useTodos'
import {
  PlusCircleIcon,
  TrashIcon,
  CheckCircleIcon,
} from '@heroicons/vue/20/solid'
await fetchTodos()
const task = ref('')
async function insertTask(data) {
  await addTodo(data)
  task.value = ''
}
function formatDate(date) {
  var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
  const fmtdate = new Date(date)
  return fmtdate.toLocaleDateString("en-US", options)
}
defineProps(['userid'])
</script>