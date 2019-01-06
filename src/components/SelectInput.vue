<template>
  <div :class="size" class="field">
    <label v-if="label" :for="id">{{ label }} <span v-if="optional">(optional)</span></label>
    <select
      :id="id"
      :name="name"
      v-model="val"
      class="select"
      @input="updateValue($event.target.value)"
    >
      <option v-if="placeholder" value="zzzzz">{{ placeholder }}</option>
      <option v-for="option in options" :value="option.value" :key="option.value">{{ option.label }}<template v-if="option.type"> ({{ option.type }})</template></option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [Boolean, Number, String],
      default: 'zzzzz'
    },
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    size: {
      type: String,
      default: ''
    },
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      val: 'zzzzz'
    }
  },
  watch: {
    value (selected) {
      this.val = selected
    }
  },
  mounted () {
    this.val = this.value
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  label {
    margin-bottom: calc(var(--line) * 0.25);
  }
  select {
    font-size: var(--font-size-3);
    position: relative;
    -webkit-appearance:none;
    -moz-appearance:none;
    border-radius:var(--tight-radius);
    background-color:var(--white);
    background-image: url('/img/arrow-down.svg');
    background-size: 1em 1em;
    background-repeat: no-repeat;
    background-position: calc(100% + 1.5em) center;
    background-origin: content-box;
    font-weight: var(--medium);
    border: none;
    padding: var(--line);
    display:block;
    border: 1px solid var(--grey-400);
    padding: 0.3667em 2em 0.36667em 0.5em;
    margin: 0;
    border-radius: none;
    cursor: pointer;
    font-family: var(--mono);
    width: 100%;
  }
  .large select {
    font-size: var(--font-size-4);
    padding: calc(var(--line) * 0.65) calc(var(--line) * 2) calc(var(--line) * 0.65) calc(var(--line) * 0.65);
  }
  @media screen and (min-width: 48em) {
    select {
      width: auto;
    }
    .small select {
      font-size: var(--font-size-2);
      padding: 0.25em 2em 0.25em 0.25em;
    }
  }
</style>
