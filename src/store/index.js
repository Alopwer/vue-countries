import Vue from 'vue'
import Vuex from 'vuex'
import {
  GET_COUNTRIES,
  GET_COUNTRIES_ERR,
  GET_COUNTRY,
  GET_COUNTRY_BY_ID
} from './mutation-types'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    err: false,
    country: null,
    countryName: ''
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
      state.country = state.countries.find(c => c.alpha2Code == id)
    },
    updateInput(state, value) {
      state.countryName = value
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
    }
  },
  getters: {
    countries(state) {
      const regex = RegExp(state.countryName, 'i')
      return state.countryName 
        ? state.countries.filter(c => regex.test(c.name)) 
        : state.countries
    }
  },
  modules: {
  }
})
