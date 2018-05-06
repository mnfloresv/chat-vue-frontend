<template>
  <div id="start">
    <div class="row justify-content-center">
      <ChatLogo img-class="big-icon"></ChatLogo>
    </div>
    <div class="row justify-content-center">
      <form @submit.prevent="joinChat" class="input-group nick-form">
        <input type="text" placeholder="Usuario" v-model="nickname" class="form-control" required>
        <div class="input-group-append">
          <button class="form-control btn btn-chat">Entrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ChatLogo from '@/components/ChatLogo'

export default {
  name: 'NicknameScreen',
  components: {
    ChatLogo
  },
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
.nick-form {
  width: 256px;
}
</style>
