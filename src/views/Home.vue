<template>
  <div class="">
    <Login />
    <Register />
  </div>
</template>

<script>
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
export default {
  name: 'Home',
  components: {
    Login,
    Register,
  },
}
</script>
