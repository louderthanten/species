<template>
  <figure class="image">
    <img v-if="src.search('.svg') === -1" :src="src" :alt="alt">
  </figure>
</template>

<script>
let cache = new Map()
export default {
  props: {
    src: { type: String, required: true },
    alt: { type: String, required: false }
  },
  async mounted () {
    if (this.src.search('.svg') !== -1) {
      if (!cache.has(this.src)) {
        try {
          cache.set(this.src, fetch(this.src).then(r => r.text()))
        } catch (e) {
          cache.delete(this.src)
        }
      }
      if (cache.has(this.src)) {
        this.$el.innerHTML = await cache.get(this.src)
      }
    }
  }
}
</script>

<style>
.image svg,
.image img {
  width: auto;
}
</style>
