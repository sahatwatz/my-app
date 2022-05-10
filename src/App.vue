<template>
    <div>
        <nav-header/>
        <content/>
        <hello-world/>
        
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavHeader from './components/NavHeader.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    Content,
    HelloWorld

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
