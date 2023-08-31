import { supabase } from '../lib/supabaseClient'
async function fetchTodos() {
  try {
    const { data: todos, error } = await supabase.from('todos').select('*').order('id')
    if (error) throw error
    return todos
  } catch (error) {
    if (error instanceof Error) {
        alert(error.message)
      }
    return null
  }
}

async function addTodo(tododata) {
    if (tododata.task.length <= 3) {
      alert('Please make your task a little more descriptive')
      return
    }
    try {
      const { data, error } = await supabase.from('todos').insert({ user_id: tododata.userid, task: tododata.task }).single()
      if (error) throw error
      return data
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
      return null
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
// async function deleteTodo(todo: Todo) {
//   try {
//     await supabase.from('todos').delete().eq('id', todo.id)
//     console.log('deleted todo', todo.id)
//   } catch (error) {
//     console.error('error', error)
//   }
// }

export { fetchTodos, addTodo }