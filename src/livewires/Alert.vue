<template>
  <div :class="colour" class="font-size-4 py1 px2 rounded relative">
    <h3 v-if="title" class="mt1 font-size-4">{{ title }}</h3>
    <vue-markdown :class="'font-size-3'">{{ alert }}</vue-markdown>
    <p v-if="link" class="font-size-3"><a :href="link" :target="linkTarget">{{ linkText }}</a></p>
    <button class="close absolute right-0 top-0 bottom-0 mt2 mr1 pointer z10" @click="$emit('alerted', false)"><svg-close/></button>
  </div>
</template>

<script>
import Close from '../svgs/Close'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    svgClose: Close,
    vueMarkdown: VueMarkdown
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: [Boolean, String],
      default: false
    },
    alert: {
      type: String,
      default: ''
    },
    link: {
      type: [String, Boolean],
      default: false
    },
    linkText: {
      type: String,
      default: 'Read more'
    },
    linkTarget: {
      type: String,
      default: '_blank'
    }
  },
  computed: {
    colour () {
      let value = 'grey-250'
      if (this.type === 'alert') { value = 'dark-red-200' }
      if (this.type === 'warning') { value = 'yellow-200' }
      if (this.type === 'success') { value = 'green-200' }
      return value
    }
  }
}
</script>

<style scoped>
.close {
  padding:0;
  background: none;
}
</style>
