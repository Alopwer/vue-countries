<template>
    <router-link 
      :to="{ name: 'c', params: { id: country.alpha3Code } }" 
      @click.native="getCountry(country.alpha3Code)"
    >
      <div class="country-item">
        <div>
          <h3>{{ country.name || '-' }}</h3>
          <div class="item-block">
            <span>Capital </span><span>{{ country.capital || '-' }}</span>
          </div>
          <div class="item-block">
            <span>Population </span><span>{{ country.population || '-' }}</span>
          </div>
          <div class="item-block">
            <span>Region </span><span>{{ country.region || '-' }}</span>
          </div>
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
  .country-item {
    width: 300px;
    background: #ffce2b;
    margin: 20px;
    border-radius: 10px;
    padding: 20px 25px 15px;
    transition: all 0.2s;
    &:hover {
      box-shadow: 2px 2px 10px black;
    }
  }
  a {
    color: black;
  }
  h3 {
    margin-bottom: 15px;
    font-size: 1.2rem;
    padding-bottom: 4px;
    border-bottom: 2px solid #000;
    border-radius: 2px;
  }
  .item-block {
    margin-bottom: 8px;
    font-size: 1.1rem;
    display: flex;
    justify-content: space-between;
  }
</style>