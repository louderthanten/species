<template>
  <div class="family" :style="'--family:' + family.title">
    <h1>{{ family.title }}</h1>
    <div>
      <div v-for="(font, key) in family.fonts" :key="key" :class="['fw' + font.weight, font.italic ? 'italic' : '']"><router-link :to="{ name: 'font', params: { font: font.name, family: page, details: font }}">{{ font.title }}</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: this.$route.params.family
    }
  },
  computed: {
    family () {
      return this.$store.getters.family(this.page)
    }
  }
}
</script>
