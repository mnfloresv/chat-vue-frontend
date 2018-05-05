<template>
  <img v-bind:class="imgClass" src="../assets/chat.png" alt="chat icon">
</template>

<script>
export default {
  name: 'ChatLogo',
  props: {
    imgClass: String
  }
}
</script>

<style>
img.small-icon {
  width: 64px;
  height: 64px;
}

img.big-icon {
  width: 256px;
  height: 256px;
}
</style>
