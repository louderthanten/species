<template>
  <div :class="[size, classes, error ? 'error' : '']" class="field">
    <label :for="id">{{ label }} <span v-if="!required">(optional)</span></label>
    <p v-if="hint" class="font-size-1 m0 measure-wide" v-html="hint"/>
    <input
      :ref="name"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :type="type"
      :autocomplete="autocomplete"
      :pattern="type === 'number' ? '[0-9]*' : '.*'"
      :disabled="disabled"
      :maxlength="maxlength"
      :class="['align-' + align, 'input--' + kind, 'rule-' + border]"
      :required="required"
      @mousewheel="preventScroll($event.target)"
      @focus="$event.target.select()"
      @change="updateValue($event.target.value)"
      @input="updateValue($event.target.value)"
      @blur="$emit('blur')">
    <span v-if="error" class="error absolute dark-red-text font-size-1 line-height-1 medium sans block left-0">{{ error }}</span>
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
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    autocomplete: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    maxlength: {
      type: Number,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: String,
      default: 'grey-250'
    },
    type: {
      type: String,
      default: 'text'
    },
    kind: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
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

<style>
.field {
  padding-bottom: var(--line);
  /*width: 100%;*/
  position: relative;
  /* padding-right: calc(var(--line) * 0.5); */
}
label {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  display: block;
  max-width: 90%;
  font-weight: var(--bold);
}
label span {
  font-size:0.667em;
}
textarea,
input {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  -webkit-appearance: none;
  transition: all 0.2s linear;
  border-width: 1px;
  border-style: solid;
  border-color: var(--grey-400);
  padding: calc(var(--line) * 0.3667);
  border-radius: 0;
  border-radius: var(--tight-radius);
  width:100%;
  outline:none;
  margin-top: calc(var(--line) * 0.25);
  font-weight: var(--regular);
  background:var(--white);
  font-family: var(--mono);
}
textarea:focus,
input:focus {
  border: 1px solid var(--grey-300);
}
textarea::placeholder,
input::placeholder {
  color: var(--grey-450);
}
textarea:required,
input:required,
textarea:invalid,
input:invalid {
  box-shadow: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance:textfield;
}
.field.small {
  padding-bottom:0;
}
.field.small label {
  font-size: var(--font-size-2);
  line-height: var(--line-height-2);
}
.field.small textarea,
.field.small input {
  border-radius: var(--tight-radius);
  padding: calc(var(--line) * 0.125);
  background: rgba(255,255,255,0.6);
  font-family: var(--mono);
}
.field.large label {
  font-size: var(--font-size-3);
  font-family: var(--display);
  font-weight: var(--bold);
}
.field.large textarea,
.field.large input {
  font-size: var(--font-size-3);
  line-height: var(--line-height-3);
  padding: calc(var(--line) * 0.65);
  border-radius: var(--radius);
}
.input--invisible {
  border-color: var(--white);
  background: none;
  letter-spacing: 0;
  color: inherit;
  font-family: inherit;
}
.error label {
  color: var(--dark-red);
}
.error input {
  color: var(--dark-red);
  border-color: var(--dark-red);
  background-color: var(--dark-red-100);
}
.has-tip label {
  padding-right: 1.5em;
}
.has-tip button {
  position: absolute;
  right: 0.75em;
  top: 0.15em;
}
@media screen and (min-width: 47.9em) {
textarea,
input {
    font-size: var(--font-size-2);
    line-height: var(--line-height-2);
  }
}
</style>
