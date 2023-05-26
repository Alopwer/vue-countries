<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
  <div></div>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  created() {
    this.getCountries()
  },
  methods: {
    ...mapActions(['getCountries'])
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    padding: 0 16px;
    max-width: 1200px;
    margin: 0 auto;
  }
  a {
    color: white;
    text-decoration: none;
  }
  body {
    background: #388c7c;
    font-family: 'Roboto', sans-serif;
  }
</style>
