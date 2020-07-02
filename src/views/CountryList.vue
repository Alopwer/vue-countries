<template>
  <div>
    <div>
      <country-searchbar />
      <country-list-item 
        v-for="country in countries" 
        :key="country.alpha2Code" 
        :country="country"
      />
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import CountryListItem from '../components/CountryListItem';
  import CountrySearchbar from '../components/CountrySearchbar';
  
  export default {
    name: 'CountryList',
    components: {
      CountryListItem,
      CountrySearchbar
    },
    created() {
      this.countries.length === 0 && this.getCountries()
    },
    watch: {
      boards() {
        console.log(this.countries[0])
      }
    },
    methods: {
      ...mapActions(['getCountries'])
    },
    computed: {
      // ...mapState(['countries']),
      ...mapGetters(['countries'])
    }
  }
</script>

<style lang="scss" scoped>

</style>