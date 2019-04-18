<template>
  <div id="app">
    <navbar></navbar>
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import navbar from './components/nav'

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>
#app{
background: url("./img/megumi.png") no-repeat;
  background-size:125% auto;
}
</style>
