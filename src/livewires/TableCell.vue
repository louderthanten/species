<template>
  <td :class="classes" :id="id">
    <slot/>
  </td>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
  }
}
</script>
