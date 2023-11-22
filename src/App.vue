<template>
  <div id="app">
    <file-uploader />
  </div>
</template>

<script>
import fileuploader from './components/fileuploader.vue'

export default {
  name: 'App',
  components: {
    "file-uploader":fileuploader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
