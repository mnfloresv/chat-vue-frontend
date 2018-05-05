<template>
  <div id="newroom">
    <div class="modal fade" id="addRoomModal" tabindex="-1" role="dialog" aria-labelledby="addRoomModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addRoomModalLabel">Añadir sala</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form @submit.prevent="createRoom" class="form-group">
            <div class="modal-body">
              <input type="text" placeholder="Nombre de la sala" v-model="roomName" class="form-control">
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-chat">Guardar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
        $('#addRoomModal').modal('hide')
        this.roomName = ''
        this.$emit('created')
      })
    }
  }
}
</script>

<style>

</style>
