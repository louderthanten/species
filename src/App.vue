<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.dispatch('initFamilies')
  }
}
</script>

<style>
:root {
  --family: sans-serif;
}
body * {
  font-family: var(--family);
}
</style>
