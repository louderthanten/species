<template>
  <div :class="[size, classes, error ? 'error' : '']" class="field">
    <label :for="id">{{ label }} <span v-if="optional">(optional)</span></label>
    <p v-if="hint" class="font-size-1 m0" v-html="hint"/>
    <textarea
      :ref="name"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :required="required"
      :class="['align-' + align, 'input--' + kind, 'rule-' + border]"
      class="text-input"
      @focus="$event.target.select()"
      @input="updateValue($event.target.value)"
      @change="updateValue($event.target.value)"
      @blur="$emit('blur')"/>
    <p v-if="markdown" class="font-size-1"><strong class="mr05">Markdown formatting:</strong> <em strong class="mr05">_italic_</em> <strong strong class="mr05">**bold**</strong> <code class="mr05 font-size-1">`code`</code> <span class="mr05">>&nbsp;quote</span> <span class="accent-text mr05">[Link text](http://domain.com)</span> *&nbsp;bullet</p>
    <span v-if="error" class="error dark-red-text font-size-1 line-height-1 medium absolute">{{ error }}</span>
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
    autocomplete: {
      type: String,
      default: ''
    },
    value: {
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
    kind: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    markdown: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: String,
      default: 'grey-250'
    },
    placeholder: {
      type: String,
      default: ''
    },
    optional: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
  textarea {
    min-height: calc(var(--line) * 6);
  }
  .tall textarea {
    min-height: calc(var(--line) * 20);
  }
</style>
