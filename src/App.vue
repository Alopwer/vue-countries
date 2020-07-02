<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
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