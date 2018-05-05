<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  color: #2c3e50;
  margin-top: 60px;
}

.btn-chat, .btn-chat:focus {
  background-color: #269dd4;
  border-color: #269dd4;
  color: white;
}
</style>
