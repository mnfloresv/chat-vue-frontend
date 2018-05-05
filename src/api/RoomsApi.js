import Vue from 'vue'

export default {
  getRooms () {
    // API_URL set in config/dev.env.js
    return Vue.http.get(process.env.API_URL + '/api/rooms')
  },
  createRoom (name) {
    return Vue.http.post(process.env.API_URL + '/api/rooms', {name: name})
  },
  getLastMessages (roomId) {
    return Vue.http.get(process.env.API_URL + `/api/rooms/${roomId}/last_messages`)
  }
}
