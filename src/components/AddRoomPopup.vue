<template>
  <div id="newroom">
      <form @submit.prevent="createRoom">
        <input type="text" placeholder="Nombre de la sala" v-model="roomName">
        <button>Guardar</button>
      </form>
  </div>
</template>

<script>
import RoomsApi from '../api/RoomsApi'

export default {
  name: 'AddRoomPopup',
  data () {
    return {
      roomName: ''
    }
  },
  methods: {
    createRoom () {
      RoomsApi.createRoom(this.roomName).then(response => {
        this.$emit('close')
      })
    }
  }
}
</script>

<style>

</style>
