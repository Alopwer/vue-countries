<template>
  <div v-if="country">
    {{ country.alpha2Code }}
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'CountryItem',
    props: ['id'],
    computed: {
      ...mapState(['country']),
    },
    created() {
      if (!this.country) {
        this.getCountryById(this.id)
      }
    },
    methods: {
      ...mapActions(['getCountryById'])
    }
  }
</script>

<style lang="scss" scoped>

</style>