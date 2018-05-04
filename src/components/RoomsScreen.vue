<template>
  <div id="rooms">
    <div v-for="(room, index) in rooms" v-bind:key="index">
      <router-link :to="{ name: 'ChatScreen', params: { id: room._id.$oid }}">{{room.name}}</router-link>
    </div>
  </div>
</template>

<script>
import RoomsApi from '../api/RoomsApi'

export default {
  name: 'RoomsScreen',
  data () {
    return {
      rooms: []
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
    }
  }
}
</script>

<style>

</style>
