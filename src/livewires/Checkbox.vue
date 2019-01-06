<template>
  <div class="relative m0 p0 check">
    <input :value="val" :name="name" :id="id" v-model="checked" type="checkbox" class="checkbox pr05" @change="onChange"> <label :for="id" class="block"><slot/></label>
  </div>
</template>

<script>
import Check from '../svgs/Check'

export default {
  components: {
    svgCheck: Check
  },
  props: {
    val: {
      type: String,
      default: ''
    },
    value: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      proxy: false
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
.check {
  margin-bottom: calc(var(--line) * 0.2);
}
label {
  font-size: 1.2em;
  font-family: var(--sans);
  cursor: pointer;
  display: inline-block;
  padding-left: 1.75em;
  margin-top: 0.2em;
}
input[type=checkbox] {
  position: relative;
  position: absolute;
  cursor:pointer;
  -webkit-appearance: none;
  display:inline-block;
  width:0;
  height:0;
  border:none;
  visibility: hidden;
  background-color:rgba(255,255,255,0);
}
input[type=checkbox] + label::after {
  position: absolute;
  background-color: var(--light-grey);
  display: block;
  content:'';
  top: 0.333em;
  margin-left: -1.75em;
  width: 1.1em;
  height: 1.1em;
  text-align: center;
  line-height: normal;
  cursor:pointer;
  border-radius: var(--radius);
}
input[type=checkbox]:checked + label::after {
  background-color: var(--green);
  background-image: url('/img/check.svg');
  background-repeat: no-repeat;
  background-position: center 40%;
  background-size: 0.75em 0.75em;
  outline:none;
}
input[type=checkbox]:focus {
  outline: none;
}
</style>
