import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_COUNTRIES,
  GET_COUNTRIES_ERR,
  GET_COUNTRY,
  GET_COUNTRY_BY_ID,
  UPDATE_REGION
} from './mutation-types'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    err: false,
    country: null,
    countryName: '',
    region: ''
  },
  mutations: {
    [GET_COUNTRIES](state, countries) {
      state.countries = [...countries]
    },
    [GET_COUNTRIES_ERR](state) {
      state.err = 'Couldn\'t get the countries, try reloading the page'
    },
    [GET_COUNTRY_BY_ID](state, country) {
      state.country = Object.assign({}, country)
    },
    [GET_COUNTRY](state, id) {
      state.country = state.countries.find(c => c.alpha3Code == id)
    },
    updateInput(state, value) {
      state.countryName = value
    },
    [UPDATE_REGION](state, region) {
      state.region = region
    }
  },
  actions: {
    getCountries({ commit }) {
      Axios.get('https://restcountries.eu/rest/v2/all')
        .then(res => commit(GET_COUNTRIES, res.data))
        .catch(() => commit(GET_COUNTRIES_ERR))
    },
    getCountryById({commit}, id) {
      Axios.get(`https://restcountries.eu/rest/v2/alpha/${id}`)
        .then(res => commit(GET_COUNTRY_BY_ID, res.data))
    },
    getCountry({ commit }, id) {
      commit(GET_COUNTRY, id)
    },
    updateRegion({ commit }, region) {
      if (region === 'All') region = ''
      commit(UPDATE_REGION, region)
    }
  },
  getters: {
    countries(state) {
      const regex = RegExp(`^${state.countryName}`, 'i')
      return state.countryName || state.region
        ? state.countries.filter(c => {
          if (state.countryName && state.region) {
            return regex.test(c.name) && c.region === state.region
          } else if (state.countryName) {
            return regex.test(c.name)
          } else if (state.region) {
            return c.region === state.region
          }
        }) 
        : state.countries
    }
  },
  modules: {
  }
})
