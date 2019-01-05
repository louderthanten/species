<template>
  <div class="home">
    <h1>Species</h1>
    <h2>Sample your fonts in the browser</h2>
    <hr>
    <div v-for="family in families" :key="family.id">
      <h3 :style="'--family:' + family.title"><router-link :to="{ name: 'family', params: { family: family.name }}">{{ family.title }}</router-link></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  computed: {
    families () {
      return this.$store.getters.families
    }
  }
}
</script>
