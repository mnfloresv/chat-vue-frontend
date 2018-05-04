import Vue from 'vue'
import Router from 'vue-router'
import NicknameScreen from '@/components/NicknameScreen'
import RoomsScreen from '@/components/RoomsScreen'
import ChatScreen from '@/components/ChatScreen'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'NicknameScreen',
      component: NicknameScreen
    },
    {
      path: '/rooms',
      name: 'RoomsScreen',
      component: RoomsScreen
    },
    {
      path: '/rooms/:id',
      name: 'ChatScreen',
      component: ChatScreen
    }
  ]
})
