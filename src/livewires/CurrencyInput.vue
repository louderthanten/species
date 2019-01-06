<template>
  <div :class="[size, classes, error ? 'error' : '', tip ? 'has-tip' : '']" class="field">
    <label :for="id">{{ label }} <span v-if="optional">(optional)</span></label>
    <p v-if="hint" class="font-size-1 m0" v-html="hint"/>
    <template v-if="tip"><lw-tip  :content="tip"><svg-info/></lw-tip></template>
    <vue-numeric
      :currency="currency"
      :separator="separator"
      :min="min"
      :max="max"
      :minus="minus"
      :error="error"
      :read-only="readOnly"
      :read-only-class="readOnlyClass"
      :precision="precision"
      :empty-value="emptyValue"
      :ref="name"
      :id="id"
      :disabled="disabled"
      :placeholder="placeholder"
      :name="name"
      :class="['align-' + align, 'input--' + kind, 'rule-' + border]"
      v-model="number"
      @input="updateValue"
      @focus.native="$event.target.select()"
      @change="updateValue"
      @blur="$emit('blur')"/>
    <span v-if="error" class="error dark-red-text font-size-1 line-height-1 medium absolute">{{ error }}</span>
  </div>
</template>

<script>
import VueNumeric from 'vue-numeric'
import Tip from './Tip'

export default {
  components: {
    vueNumeric: VueNumeric,
    lwTip: Tip
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    emptyValue: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
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
    align: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    currency: {
      type: String,
      default: ''
    },
    separator: {
      type: String,
      default: ','
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: String,
      default: 'grey-250'
    },
    max: {
      type: Number,
      default: 9007199254740991
    },
    min: {
      type: Number,
      default: -9007199254740991
    },
    minus: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: null
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    readOnlyClass: {
      type: String,
      default: ''
    },
    kind: {
      type: String,
      default: ''
    },
    optional: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
      default: null
    }
  },
  data: () => ({
    number: ''
  }),
  created () {
    this.number = this.value
  },
  methods: {
    updateValue () {
      this.$emit('input', this.number)
    }
  }
}
</script>
