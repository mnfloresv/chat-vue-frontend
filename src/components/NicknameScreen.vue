<template>
  <div id="start">
      <form @submit.prevent="joinChat">
          <input type="text" placeholder="Usuario" v-model="nickname">
          <button>Entrar</button>
      </form>
  </div>
</template>

<script>
export default {
  name: 'NicknameScreen',
  data () {
    return {
      nickname: ''
    }
  },
  methods: {
    joinChat () {
      localStorage.setItem('nickname', this.nickname) // store nickname in localstorage
      this.$router.push({name: 'RoomsScreen'}) // programmatic redirect
    }
  }
}
</script>

<style>

</style>
