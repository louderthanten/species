<template>
  <section :id="id" :class="[colour, size]" class="overlay fixed top-0 left-0">
    <div v-if="close" class="close" @click="back"><svg-close/></div>
    <slot/>
  </section>
</template>

<script>
import Close from '../svgs/Close.vue'

export default {
  components: {
    svgClose: Close
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    close: {
      type: Boolean,
      default: true
    },
    closeTo: {
      type: String,
      default: 'back'
    },
    size: {
      type: String,
      default: 'c1'
    },
    colour: {
      type: String,
      default: 'black'
    }
  },
  data () {
    return {
      page: this.$route.params.id
    }
  },
  mounted () {
    const root = document.getElementsByTagName('html')[0]
    root.classList.add('overflow-hidden')
    document.body.classList.add('overflow-hidden')
  },
  destroyed () {
    const root = document.getElementsByTagName('html')[0]
    root.classList.remove('overflow-hidden')
    document.body.classList.remove('overflow-hidden')
  },
  methods: {
    back () {
      if (this.closeTo === 'back') {
        this.$router.go(-1)
      } else {
        this.$router.push({ name: this.closeTo })
      }
    }
  }
}
</script>

<style>
  .overlay {
    height:100%;
    z-index: 1000;
    overflow:auto;
    padding-top: calc(var(--line) * 2);
  }
  .overlay .close {
    position: absolute;
    top: var(--page-margin);
    right: var(--page-margin);
    z-index: 1000;
    cursor: pointer;
  }
  @media screen and (min-width: 48em) {
    .overlay {
      padding-top: calc(var(--line) * 5);
    }
  }
</style>
