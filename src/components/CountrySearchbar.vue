<template>
  <div>
    <h3>Search for a country</h3>
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
  div {
    margin: 50px auto;
    width: 100%;
    text-align: center;
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: white;
    font-weight: normal;
  }
  input {
    width: 80%;
    outline: none;
    padding: 6px 10px;
    border-radius: 10px;
    border: none;
    font-size: 1.1rem;
  }
</style>