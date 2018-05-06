<template>
  <div id="rooms">
    <div class="row justify-content-between m-4">
      <ChatLogo img-class="small-icon"></ChatLogo>
      <div><button class="btn btn-chat" data-toggle="modal" data-target="#addRoomModal">Añadir sala</button></div>
    </div>
    <AddRoomPopup @created="fetchRooms"></AddRoomPopup>
    <div v-if="loading" class="alert alert-secondary m-4" role="alert">
      Cargando salas, por favor espere...
    </div>
    <div v-for="(room, index) in rooms" v-bind:key="index" class="row list-group m-4">
      <router-link :to="{ name: 'ChatScreen', params: { id: room._id.$oid }}" class="list-group-item list-group-item-action">
        {{room.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
import ChatLogo from '@/components/ChatLogo'
import AddRoomPopup from '@/components/AddRoomPopup'
import RoomsApi from '../api/RoomsApi'

export default {
  name: 'RoomsScreen',
  components: {
    AddRoomPopup,
    ChatLogo
  },
  data () {
    return {
      rooms: [],
      loading: false,
      timer: null
    }
  },
  created: function () {
    this.timer = setTimeout(() => (this.loading = true), 100)
    this.fetchRooms()
  },
  methods: {
    fetchRooms () {
      RoomsApi.getRooms().then(response => {
        this.rooms = response.body
        clearTimeout(this.timer)
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>
