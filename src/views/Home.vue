<template>
  <div class="form-auth">
    <div v-if="showLogin">
      <Login @login="accessRoom" />
      <p>
        Don't have an account?
        <a href="#" @click="showLogin = false">Register here</a>
      </p>
    </div>
    <div v-else>
      <Register @register="accessRoom" />
      <p>
        Already have an account?
        <a href="#" @click="showLogin = true">Login here</a>
      </p>
    </div>
  </div>
</template>

<script>
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  components: {
    Login,
    Register,
  },
  setup() {
    const showLogin = ref(false)
    const router = useRouter()

    const accessRoom = () => {
      router.push({ name: 'Room' })
    }

    return { showLogin, accessRoom }
  },
}
</script>
