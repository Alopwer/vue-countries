<template>
  <div>
    <input :value="countryName" @input="updateInput"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'CountrySearchbar',
    computed: {
      ...mapState(['countryName'])
    },
    methods: {
      updateInput(e) {
        this.$store.commit('updateInput', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>