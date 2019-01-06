<template>
  <button v-tooltip.click="{ content: content, delay: 100, class: 'lw-tooltip' }"
          class="tip-button z10"
          type="button"
          tabindex="-1"><svg-info/></button>
</template>

<script>
import Info from '../svgs/Info'
import 'vue-directive-tooltip/css/index.css'

export default {
  components: {
    svgInfo: Info
  },
  props: {
    content: {
      type: String,
      default: ''
    },
    trigger: {
      type: String,
      default: 'Show on: click'
    }
  }
}
</script>

<style>
  button.tip-button {
    padding: 0;
    margin: 0;
    border-radius: 50%;
    background: none;
  }
  .tooltip-content {
    font-family: var(--sans);
    font-size: var(--font-size-2);
    line-height: var(--line-height-3);
    letter-spacing: 0.015em;
    font-weight: var(--regular);
    max-width: 20em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: calc(var(--line) * 0.25);
  }
  .lw-tooltip {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background: var(--black);
    border-radius: var(--radius);
    color: var(--white);
    z-index: 1000;
  }
  .tooltip-arrow {
    display: none;
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }
</style>
