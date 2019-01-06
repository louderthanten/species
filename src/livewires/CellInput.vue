<template>
  <td :data-label="label" :class="error ? 'error' : ''">
    <label v-if="label" :for="id" class="visuallyhidden">{{ label }}</label>
    <input
      v-focus="focus"
      ref="input"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :class="'align-' + align"
      :type="type"
      :step="step"
      :disabled="disabled"
      :pattern="type === 'number' ? '[0-9]*' : '.*'"
      class="text-input"
      @mousewheel="preventScroll($event.target)"
      @input="updateValue($event.target.value)"
      @change="updateValue($event.target.value)"
      @blur="$emit('blur')">
  </td>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    step: {
      type: Number,
      default: 1
    },
    focus: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'right'
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'number'
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    },
    preventScroll (target) {
      if (this.type === 'number') {
        target.blur()
      }
    }
  }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance:textfield;
}
input{
  font-size: var(--font-size-2);
  -webkit-appearance: none;
  padding: calc(var(--line) * 0.25);
  margin-top: 0;
  margin-bottom: 0;
  border-radius: none;
  font-family: var(--mono);
  transition: all 0.2s linear;
  width:100%;
  outline:none;
  font-weight: var(--regular);
  background: var(--white);
  letter-spacing: 0.05em;
  border-top: none;
  border-bottom: none;
  border-left: 1px solid var(--grey-250);
  border-right: none;
}
input:hover {
  border-color: var(--grey-300);
}
input:active,
input:focus {
  border-color: var(--grey-300);
  background: var(--grey-200);
}
input[type=number] {
  float: right;
  font-family:var(--mono);
}
.error input {
  border-color: var(--dark-red-400);
  background-color: var(--dark-red-100);
}
@media screen and (max-width: 48em) {
  .mobile input {
    border: 1px solid var(--grey-250);
  }
}
</style>
