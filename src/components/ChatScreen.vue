<template>
  <div id="chat">
    <div class="row justify-content-between m-4">
      <ChatLogo img-class="small-icon"></ChatLogo>
      <div>
        <router-link :to="{ name: 'RoomsScreen'}" class="btn btn-chat">Salas</router-link>
      </div>
    </div>
    <div class="row m-4">
    <div id="scrollable" ref="scrollable" class="col-12">
      <p v-for="(msg, index) in messages" v-bind:key="index" v-bind:title="msg.created_at" class="mx-1 my-2">
        {{msg.author}} > {{msg.text}}
      </p>
    </div>
    </div>
    <div class="row m-4">
      <form @submit.prevent="sendMessage" class="input-group">
        <input type="text" v-model="newMessage" class="form-control">
        <div class="input-group-append">
          <button class="form-control btn btn-chat">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ChatLogo from '@/components/ChatLogo'
import RoomsApi from '../api/RoomsApi'

var ActionCable = require('actioncable')
var cable = ActionCable.createConsumer(process.env.ACTIONCABLE_URL)

export default {
  name: 'ChatScreen',
  components: {
    ChatLogo
  },
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
      if (this.newMessage) {
        this.roomSubscription.send({author: this.getNickname(), text: this.newMessage})
        this.newMessage = ''
      }
    }
  }
}
</script>

<style>
  #scrollable {
    overflow-y: auto;
    border: 1px solid;
    border-color: darkgray;
    height: 60vh;
  }
</style>
