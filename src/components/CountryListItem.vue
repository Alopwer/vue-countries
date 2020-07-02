<template>
  <router-link 
    :to="{ name: 'c', params: { id: country.alpha2Code } }" 
    @click.native="getCountry(country.alpha2Code)"
  >
    <div>
      <h3>{{ country.name }}</h3>
      <div>
        <span>Capital: </span><span>{{ country.capital }}</span>
      </div>
      <div>
        <span>Population: </span><span>{{ country.capital }}</span>
      </div>
      <div>
        <span>Region: </span><span>{{ country.region }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'CountryListItem',
    props: ['country'],
    methods: {
      ...mapActions(['getCountry'])
    },
  }
</script>

<style lang="scss" scoped>

</style>