<template>
  <div id="chat">
    <div id="scrollable" ref="scrollable">
      <p v-for="(msg, index) in messages" v-bind:key="index">
        {{msg.author}} > {{msg.text}}
      </p>
    </div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="newMessage">
      <button>Enviar</button>
    </form>
  </div>
</template>

<script>
import RoomsApi from '../api/RoomsApi'

var ActionCable = require('actioncable')
var cable = ActionCable.createConsumer(process.env.ACTIONCABLE_URL)

export default {
  name: 'ChatScreen',
  data () {
    return {
      messages: [],
      newMessage: '',
      roomSubscription: null
    }
  },
  created () {
    this.fetchLastMessages(this.$route.params.id)

    this.roomSubscription = cable.subscriptions.create({
      channel: 'RoomChannel',
      id: this.$route.params.id
    }, {
      received: (data) => {
        this.messages.push(data)
        this.scrollDivToBottom()
      }
    })
  },
  beforeDestroy () {
    cable.subscriptions.remove(this.roomSubscription)
    cable.disconnect()
  },
  methods: {
    fetchLastMessages (roomId) {
      RoomsApi.getLastMessages(roomId).then(response => {
        this.messages = response.body
        this.scrollDivToBottom()
      })
    },
    scrollDivToBottom () {
      this.$nextTick(function () {
        this.$refs.scrollable.scrollTop = this.$refs.scrollable.scrollHeight
      })
    },
    getNickname () {
      return localStorage.getItem('nickname') || 'Anónimo'
    },
    sendMessage () {
      this.roomSubscription.send({author: this.getNickname(), text: this.newMessage})
      this.newMessage = ''
    }
  }
}
</script>

<style>
  #scrollable {
    height: 100px;
    overflow-y: auto;
    border: 1px solid;
    border-color: darkgray;
    text-align: left;
    height: 300px;
  }
</style>
