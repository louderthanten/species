<template>
  <div :class="[type, 'active-' + selected]" class="field option-buttons button-group">
    <p v-if="label" class="font-size-3 bold label inline-block">{{ label }}</p>
    <p v-if="hint" class="font-size-1 m0" v-html="hint"/>
    <br>
    <button
      v-for="(option) in options"
      :key="option.value"
      :class="['button', colour + '-button', size + '-button', { 'active': current === option.value }, 'option-' + option.value]"
      @click.prevent="changeOption(option.value)">{{ option.label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    colour: {
      type: String,
      default: ''
    },
    current: {
      type: [String, Number],
      default: null
    },
    hint: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'horizontal'
    },
    options: {
      type: Array,
      default: () => ([{
        label: '',
        value: ''
      }])
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  mounted () {
    this.selected = this.current
  },
  methods: {
    changeOption (val) {
      this.selected = val
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style scoped>
  .label {
    margin-bottom: calc(var(--line) / 4);
  }
  button {
    border-radius: 0;
    display: block;
    margin-bottom: 0;
    border-bottom: 1px solid var(--black);
    width: 100%;
  }
  button.active {
    background: var(--accent);
  }
  button:first-of-type {
    border-top-right-radius: var(--radius);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  button:last-of-type {
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-bottom: none;
  }
  .small .label {
    font-size: var(--font-size-2);
    line-height: var(--line-height-2);
  }
  .small button{
    font-size: var(--font-size-2);
    padding: calc(var(--line) * 0.5) calc(var(--line) * 0.5);
    display: inline-block;
    width: auto;
    border-bottom: none;
    border-right: 1px solid var(--black);
  }
  .small button:first-of-type {
    border-top-right-radius: 0;
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .small button:last-of-type {
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: var(--radius);
    border-bottom-left-radius: 0;
    border-right: none;
  }
  @media screen and (min-width: 48em) {
    .horizontal button {
      display: inline-block;
      width: auto;
      border-bottom: none;
      border-right: 1px solid var(--black);
    }
    .horizontal button:first-of-type {
      border-top-right-radius: 0;
      border-top-left-radius: var(--radius);
      border-bottom-left-radius: var(--radius);
    }
    .horizontal button:last-of-type {
      border-bottom-right-radius: var(--radius);
      border-top-right-radius: var(--radius);
      border-bottom-left-radius: 0;
      border-right: none;
    }
    .small button{
      line-height: var(--line-height-1);
      padding: calc(var(--line) * 0.25) calc(var(--line) * 0.5);
    }
  }
</style>
