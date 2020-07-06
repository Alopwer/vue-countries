<template>
  <div class="header">
    <div class="container">
      <router-link :to="{ name: '/' }" class="">
        Home
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="scss" scoped>
  .header {
    background: black;
  }
  a {
    font-size: 1.8rem;
    color: white;
    margin: 4px 0;
    display: inline-block;
  }
</style>