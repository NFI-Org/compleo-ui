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
/**
 * Targets a specific todo via its record id and updates the is_completed attribute.
 */
// async function updateTaskCompletion(todo: Todo, isCompleted: boolean) {
//   try {
//     const { error } = await supabase
//       .from('todos')
//       .update({ is_complete: isCompleted })
//       .eq('id', todo.id)
//       .single()

//     if (error) {
//       alert(error.message)
//       console.error('There was an error updating', error)
//       return
//     }

//     console.log('Updated task', todo.id)
//   } catch (err) {
//     alert('Error')
//     console.error('Unknown problem updating record', err)
//   }
// }

// /**
//  *  Deletes a todo via its id
//  */


export { allTodos,fetchTodos, addTodo, deleteTodo }