<template>
  <div v-if="country">
    <h2>{{ country.name }}</h2>
    <div>
      <h3>Names</h3>
      <div>
        <span>Official Name</span>
        <span>{{ country.name }}</span>
      </div>
      <div>
        <span>Common Name</span>
        <span>{{ country.nativeName }}</span>
      </div>
      <div>
        <span>Alternative Spellings</span>
        <div>
          <span 
            v-for="altSpelling of country.altSpellings" 
            :key="altSpelling"
          >
            {{ altSpelling }}
          </span>
        </div>
      </div>
      <div>
        <span>Translations</span>
        <div>
          <div v-for="(translation, language) in country.translations" :key="language">
            <span>{{ language }}</span>
            <span>{{ translation }}</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>Codes</h3>
      <div>
        <span>ISO 3166-1 alpha-2</span>
        <span>{{ country.alpha2Code }}</span>
      </div>
      <div>
        <span>ISO 3166-1 alpha-3</span>
        <span>{{ country.alpha3Code }}</span>
      </div>
      <div>
        <span>ISO 3166-1 numeric</span>
        <span>{{ country.numericCode }}</span>
      </div>
      <div>
        <span>International calling code</span>
        <div>
          <span v-for="code in country.callingCodes" :key="code">{{ code }}</span>
        </div>
      </div>
      <div>
        <span>Top level domain</span>
        <div>
          <span v-for="domain in country.topLevelDomain" :key="domain">{{ domain }}</span>
        </div>
      </div>
    </div>
    <div>
      <h3>Languages</h3>
      <div>
        <span>Native Language</span>
        <span>{{ country.languages[0].name }}</span>
      </div>
      <div>
        <span>Languages</span>
        <div>
          <span v-for="language in country.languages" :key="language">{{ language.name }}</span>
        </div>
      </div>
    </div>
    <div>
      <img :src="country.flag"/>
    </div>
    <div>
      <h3>Geography</h3>
      <div>
        <span>Region</span>
        <span>{{ country.region }}</span>
      </div>
      <div>
        <span>Subregion</span>
        <span>{{ country.subregion }}</span>
      </div>
      <div>
        <span>Capital</span>
        <span>{{ country.capital }}</span>
      </div>
      <div>
        <span>Demonym</span>
        <span>{{ country.demonym }}</span>
      </div>
      <div>
        <span>Lat/Lng</span>
        <span>{{ country.latlng.join('/') }}</span>
      </div>
      <div>
        <span>Area</span>
        <span>{{ country.area }}</span>
      </div>
      <div>
        <div>Borders</div>
        <router-link 
          :to="{ name: 'c', params: { id: border } }" 
          v-for="border in country.borders" 
          :key="border"
        >
          {{ border }}
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'CountryItem',
    props: ['id'],
    computed: {
      ...mapState(['country'])
    },
    created() {
      if (!this.country) {
        this.getCountryById(this.id)
      }
    },
    watch: {
      $route(to) {
        this.getCountry(to.params.id)
      }
    },
    methods: {
      ...mapActions(['getCountryById', 'getCountry'])
    }
  }
</script>

<style lang="scss" scoped>

</style>