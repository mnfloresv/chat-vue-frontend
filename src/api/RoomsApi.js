import Vue from 'vue'

export default {
  getRooms () {
    // API_URL set in config/dev.env.js
    return Vue.http.get(process.env.API_URL + '/api/rooms')
  }
}
