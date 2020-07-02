<template>
  <div>
    <label for="">Region:</label>
    <select @change="handleRegion">
      <option v-for="region of regions" :key="region">{{ region }}</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    name: 'CountryFilterbar',
    data() {
      return {
        regions: [
          'All',
          'Africa',
          'Americas',
          'Asia',
          'Europe',
          'Oceania',
        ]
      }
    },
    methods: {
      ...mapActions(['updateRegion']),
      handleRegion(e) {
        this.updateRegion(e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>