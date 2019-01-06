<template>
  <div :style="{ '--switch-width': width }" class="switch mr1">
    <p v-if="label" class="font-size-2 bold label inline-block mr1">{{ label }}</p>
    <p v-if="hint" class="font-size-1 m0" v-html="hint"/>
    <button
      :aria-pressed="selected ? 'true' : 'false'"
      :class="selected ? 'active' : ''"
      class="button"
      data-toggle="button"
      autocomplete="off"
      @click="changeOption"><div class="handle"/></button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: 'calc(var(--line) * 2.5)'
    }
  },
  data () {
    return {
      selected: false
    }
  },
  mounted () {
    this.selected = this.value
  },
  methods: {
    changeOption () {
      this.selected ? this.selected = false : this.selected = true
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style scoped>
  .switch {
    position: relative;
    --off: 'off';
    --on: 'on';
    --switch-width: calc(var(--line) * 2.5);
    --switch-height: calc(var(--line) * 1.25);
    --switch-speed: 0.2s;
    margin-bottom: calc(var(--line) * 0.5);
  }
  .label {
    margin-bottom: calc(var(--line) / 8);
    display: block;
  }
  @media screen and (min-width: 48em) {
    .switch {
      margin-bottom: calc(var(--line) * 0.25);
    }
    .label {
      margin-bottom: calc(var(--line) / 6);
    }
  }
  .button {
    position: relative;
    border-radius: var(--switch-height);
    display: inline-block;
    margin-bottom: 0;
    border: none;
    height: var(--switch-height);
    width: var(--switch-width);
    background-color: var(--grey);
    color: var(--white);
    padding: 0;
  }
  .button:after,
  .button:before {
    color: var(--white);
    line-height: calc(var(--switch-height) * 1.1);
    font-size: 1em;
    font-weight: var(--semibold);
    position: absolute;
    bottom: 0;
    transition: opacity var(--switch-speed);
    width: calc(var(--switch-width) * 0.5);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .button:focus {
    outline: none;
    box-shadow: 0 0 1px rgba(0,0,0,0.1) inset;
  }
  .button:before {
    content: var(--off);
    right: calc(var(--switch-width) * 0.15);
    text-align: right;
  }
  .button:after {
    content: var(--on);
    left: calc(var(--switch-width) * 0.15);
    opacity: 0;
    text-align: left;
  }
  .button.active {
    background-color: var(--accent);
  }
  .handle {
    position: absolute;
    top: calc(var(--switch-height) * 0.125);
    left: calc(var(--switch-height) * 0.125);
    width: calc(var(--switch-height) * 0.75);
    height: calc(var(--switch-height) * 0.75);
    border-radius: calc(var(--switch-height) * 0.75);
    background: var(--white);
    transition: left var(--switch-speed);
    box-shadow: 1px 1px 4px rgba(0,0,0, 0.2);
  }
  .active {
    transition: background-color var(--switch-speed);
  }
  .active .handle {
    left: calc(var(--switch-height) + ((var(--switch-height) * 0.25) / 2));
    transition: left var(--switch-speed);
  }
  .active:before {
    opacity: 0;
  }
  .active:after {
    opacity: 1;
  }
</style>
