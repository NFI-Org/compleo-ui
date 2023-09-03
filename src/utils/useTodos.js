import { supabase } from '../lib/supabaseClient'
import { ref } from 'vue'
const allTodos = ref([])
async function fetchTodos() {
  try {
    const { data: todos, error } = await supabase.from('todos').select('*').order('id')

    if (error) throw error

    if (todos === null) {
      allTodos.value = []
      return
    }
    allTodos.value = todos
  } catch (error) {
    if (error instanceof Error) {
        alert(error.message)
      }
  }
}

async function addTodo(todo) {
    try {
      await supabase.from('todos').insert([{ user_id: todo.userid, task: todo.task }]).select()
      fetchTodos()
    } catch (error) {
      console.error('error', error)
    }
  }

async function deleteTodo(todo) {
  try {
    await supabase.from('todos').delete().eq('id', todo.id)
    fetchTodos()
  } catch (error) {
    console.error('error', error)
  }
}

async function completeTodo(todo, isCompleted) {
  try {
    await supabase
      .from('todos')
      .update({ is_complete: isCompleted })
      .eq('id', todo.id)
      .select()
    fetchTodos()
  } catch (error) {
    console.error('error', error)
  }
}


export { allTodos,fetchTodos, addTodo, deleteTodo, completeTodo }