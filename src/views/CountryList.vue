<template>
  <div>
    <div>
      <country-searchbar />
      <country-filterbar />
      <div v-show="countries.length">
        <country-list-item 
          v-for="country in countries" 
          :key="country.alpha2Code" 
          :country="country"
        />
      </div>
      <div v-show="!countries.length">
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import CountryListItem from '../components/CountryListItem';
  import CountrySearchbar from '../components/CountrySearchbar';
  import CountryFilterbar from '../components/CountryFilterbar';
  
  export default {
    name: 'CountryList',
    components: {
      CountryListItem,
      CountrySearchbar,
      CountryFilterbar
    },
    methods: {
      ...mapActions(['getCountries'])
    },
    computed: {
      ...mapGetters(['countries'])
    }
  }
</script>

<style lang="scss" scoped>

</style>