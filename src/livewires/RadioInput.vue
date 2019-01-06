<template>
  <div class="radio">
    <input :value="value" :name="name" :id="id" v-model="checked" type="radio" @onChange="onChange">
    <label :for="id" class="radio-label">
      <template v-if="label">{{ label }}</template>
      <slot v-else/>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    }
  },
  computed: {
    checked: {
      get () {
        return this.value
      },
      set (value) {
        this.proxy = value
      }
    }
  },
  methods: {
    onChange (event) {
      this.$emit('input', this.proxy)
    }
  }
}
</script>

<style scoped>
div {
  margin-bottom: calc(var(--line) * 1);
}
label {
  font-size: var(--font-size-3);
  font-weight: var(--medium);
  padding-left: calc(var(--line) * 1.25);
}
input {
  position: relative;
  cursor:pointer;
  -webkit-appearance: none;
  display:inline-block;
  width:0;
  height:0;
  border:none;
  margin-right: calc(var(--line) / 4);
  vertical-align: baseline;
}
input:after {
  position: relative;
  background-color: var(--light-grey);
  display: block;
  content:'';
  top: calc(var(--line) * -.92);
  width: calc(var(--line) * 1.25);
  height: calc(var(--line) * 1.25);
  text-align: center;
  line-height: normal;
  cursor:pointer;
  border-radius: 100%;
}
input:hover:after {
  background-color:var(--accent);
}
input:checked:after {
  background-color: var(--white);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: calc(var(--line) * 0.75) calc(var(--line) * 0.75);
  width: calc(var(--line) * 1.25);
  height: calc(var(--line) * 1.25);
  border: calc(var(--line) * 0.33) solid var(--accent);
  z-index: 100;
  outline:none;
}
input:focus {
  outline: none;
}
</style>
