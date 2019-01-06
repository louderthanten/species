<template>
  <div :class="size" class="field pb0">
    <label v-if="label" :for="id" class="measure--none pr1"><span class="font-size-3 semibold">{{ label }}</span> <span v-if="optional">(optional)</span></label>
    <input
      ref="input"
      :id="id"
      v-model="selected"
      :name="name"
      :min="min"
      :max="max"
      :step="step"
      class="range-input clear block"
      type="range"
      @input="updateValue($event.target.value)">
    <div class="flex justify-content-space-between align-center pt1">
      <div class="font-size-3 bold uppercase">{{ min }}</div>
      <div class="font-size-3 bold uppercase">{{ max }}</div>
    </div>
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
      type: [String, Number],
      default: 1
    },
    size: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    },
    step: {
      type: Number,
      default: 1
    },
    optional: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    value (selected) {
      this.selected = selected
    }
  },
  created () {
    this.selected = this.value
  },
  methods: {
    updateValue (value) {
      this.selected = value
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>
.field {
  --track-color: var(--black);
  --thumb-color: var(--accent);

  --thumb-height: calc(var(--line) * 1.25);
  --thumb-width: calc(var(--line) * 1.25);

  --track-width: 100%;
  --track-height: calc(var(--line) * 0.75);
  --track-shadow-size: 2px;
  --track-shadow-blur: 2px;
  --track-shadow-color: transparent;
  --track-border-width: 1px;
  --track-border-color: var(--black);
  padding-bottom: 0;
}
label {
  margin-bottom: calc(var(--line) * 0.5);
}

input[type="range"] {
  -webkit-appearance: none;
  margin: 0;
  width: var(--track-width);
  background:transparent;
  margin-top: calc(var(--line) * 0.125);
  margin-bottom: 0;
  border: none;
  padding:0;
}
input[type="range"]:focus {
  border: none;
  background: var(--grey-250);
}

input[type="range"]::-webkit-slider-runnable-track {
  width: var(--track-width);
  height: var(--track-height);
  cursor: pointer;
  transition: all .2s ease;
  background: var(--track-color);
  border-radius: var(--radius);
}
input[type="range"]::-ms-track {
  width: var(--track-width);
  height: var(--track-height);
  cursor: pointer;
  transition: all .2s ease;
  background: var(--track-color);
  border-radius: var(--radius);
}
input[type="range"]::-moz-range-track {
  width: var(--track-width);
  height: var(--track-height);
  cursor: pointer;
  transition: all .2s ease;
  background: var(--track-color);
  border-radius: var(--radius);
}

input[type="range"]::-webkit-slider-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  border-radius: var(--radius);
  background: var(--thumb-color);
  margin-top: calc(var(--thumb-height) - var(--track-height) * 2);
  cursor: pointer;
  cursor: grab;
  border: none;
  -webkit-appearance: none;
}
input[type="range"]::-ms-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  border-radius: var(--radius);
  background: var(--thumb-color);
  margin-top: calc(var(--thumb-height) - var(--track-height) * -0.5);
  cursor: pointer;
  cursor: grab;
  border: none;
  -webkit-appearance: none;
}
input[type="range"]::-moz-range-thumb {
  height: var(--thumb-height);
  width: var(--thumb-width);
  border-radius: var(--radius);
  background: var(--thumb-color);
  margin-top: calc(var(--thumb-height) - var(--track-height) * -0.5);
  cursor: pointer;
  cursor: grab;
  border: none;
  -webkit-appearance: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: var(--track-color);
}
input[type="range"]:active {
  cursor:grabbing;
}
input[type="range"]:active::-webkit-slider-thumb {
  cursor:grabbing;
}
input[type="range"]:active::-webkit-slider-runnable-track {
  cursor:grabbing;
}
input[type="range"]::-moz-range-track {
  background: var(--track-color);
  border: none;
  border-radius: var(--radius);
}
input[type="range"]::-moz-focus-outer {
  border: 0;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: var(--thumb-width) 0;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: var(--black);
  border: var(--track-border-width) solid var(--track-border-color);
  border-radius: calc(var(---radius) * 2);
}
input[type="range"]::-ms-fill-upper {
  background: var(--track-color);
  border: var(--track-border-width) solid var(--track-border-color);
  border-radius: calc(var(---radius) * 2);
}
input[type="range"]::-ms-fill-lower {
  background: var(--track-color);
}
input[type="range"]:focus::-ms-fill-upper {
  background: var(--dark-grey);
}
</style>
