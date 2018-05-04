<template>
  <div id="rooms">
    <button @click="showModal=true">Añadir sala</button>
    <AddRoomPopup v-if="showModal" @close="hideModal"></AddRoomPopup>
    <div v-for="(room, index) in rooms" v-bind:key="index">
      <router-link :to="{ name: 'ChatScreen', params: { id: room._id.$oid }}">{{room.name}}</router-link>
    </div>
  </div>
</template>

<script>
import AddRoomPopup from '@/components/AddRoomPopup'
import RoomsApi from '../api/RoomsApi'

export default {
  name: 'RoomsScreen',
  components: {
    AddRoomPopup
  },
  data () {
    return {
      rooms: [],
      showModal: false
    }
  },
  created: function () {
    this.fetchRooms()
  },
  methods: {
    fetchRooms () {
      RoomsApi.getRooms().then(response => {
        this.rooms = response.body
      })
    },
    hideModal () {
      this.showModal = false
      this.fetchRooms() // refresh
    }
  }
}
</script>

<style>

</style>
