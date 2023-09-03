import { supabase } from '../lib/supabaseClient'
import { ref } from 'vue'
const isSignUpSuccess = ref(false)
const isProfileExists = ref(true)
const website = ref('')
const email = ref('')
const name = ref('')
const userid = ref('')
const handleLogin = async (credentials) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password
      })
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  }

  async function handleSignup(credentials) {
    try {
      const { email, password } = credentials
      // prompt user if they have not filled populated their credentials
      if (!email || !password) {
        alert('Please provide both your email and password.')
        return
      }
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) {
        alert(error.message)
        console.error(error, error.message)
        return
      }
      isSignUpSuccess.value = true
    } catch (err) {
      console.error('signup error', err)
    }
  }

  async function getProfile(session) {
    try {
      const { user } = session.value
  
      let { data, error, status } = await supabase
        .from('profiles')
        .select(`website, name`)
        .eq('user_id', user.id)
        .single()
  
      if (error && status !== 406) throw error
  
      if (data) {
        website.value = data.website
        name.value = data.name
        email.value = user.email
        userid.value = user.id
      } else {
        email.value = user.email
        userid.value = user.id
        isProfileExists.value = false
      }
    } catch (error) {
      alert(error.message)
    }
  }

  async function profilecreation(data) {
    try {
      const { error } = await supabase.from('profiles').insert([{ user_id: data.userid, website: data.website, name: data.name }]).select()
      if (error) {
        alert(error.message)
        console.error(error, error.message)
        return
      }
      isProfileExists.value = true
    } catch (err) {
      console.error('signup error', err)
    }
  }

export {
  handleLogin,
  handleSignup,
  isSignUpSuccess,
  isProfileExists,
  getProfile,
  profilecreation,
  name,
  email,
  website,
  userid
}