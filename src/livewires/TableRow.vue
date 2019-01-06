<template>
  <tr :class="status">
    <td v-for="(value, key) in values" v-if="values" :key="key" v-html="value">{{ value }}</td>
    <slot v-else/>
  </tr>
</template>

<script>
export default {
  props: {
    values: {
      type: Array,
      default: () => []
    },
    status: {
      type: String,
      default: ''
    }
  }
}
</script>
