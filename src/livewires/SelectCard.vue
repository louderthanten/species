<template>
  <div :class="[expanded ? 'expanded' : 'not-expanded', selected ? 'selected ' + selectedColour : colour]" class="select-card p1">
    <h3 v-if="title">{{ title }}</h3>
    <div v-if="description" class="description">
      <vue-markdown>{{ description }}</vue-markdown>
      <p><button class="invisible-button small-button" @click="expanded = !expanded">Expand</button></p>
    </div>
    <p v-if="type && id && expanded"><router-link :to="{ name: type, params: { id: id }}"  :class="'action'">Edit</router-link></p>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    vueMarkdown: VueMarkdown
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    colour: {
      type: String,
      default: 'cream'
    },
    selectedColour: {
      type: String,
      default: 'dark-grey'
    }
  },
  data () {
    return {
      selected: false,
      expanded: false
    }
  },
  methods: {
    select () {
      this.$emit('selected', this.id)
    }
  }
}
</script>

<style scoped>
.select-card {

}
</style>
