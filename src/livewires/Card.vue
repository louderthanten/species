<template>
  <div class="flex flex-column">
    <router-link v-if="url" :to="url" :class="[colour, 'align-right card_link pt2 pb1 px1 flex flex-column flex-grow justify-content-space-between']" active-class="active">
      <h4 class="font-size-2 uppercase bold ls3 mb2 mt0">{{ title }}</h4>
      <p class="font-size-1 light mb0"><span class="extra-condensed book font-size-8 price block">{{ value | currency }}</span>{{ unit }}</p>
    </router-link>
    <div v-else :class="colour" class="align-right pt2 pb1 px1 flex flex-column flex-grow justify-content-space-between">
      <h4 class="font-size-2 uppercase bold ls3 mb2 mt0">{{ title }}</h4>
      <p class="font-size-1 light mb0"><span class="extra-condensed book font-size-8 price block">{{ value | currency }}</span>{{ unit }}</p>
    </div>
    <div v-if="url" class="grey p1 flex justify-content-flex-end subblock">
      <router-link :to="url" :class="'button small-button mb0'" active-class="active">Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: [String, Object],
      default: ''
    },
    colour: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .card_link {
    text-decoration: none;
    color: var(--cream);
  }
  .card_link p {
    overflow-y: hidden;
    word-wrap: none;
  }
  .card_link:hover,
  .card_link:active,
  .card_link:focus {
    background: var(--accent);
    transition: all 0.08s linear;
  }
</style>
