<template>
  <div :class="['fw' + weight, italic ? 'italic' : '']" class="mb6">
    <h4>{{ title }}</h4>
    <p v-if="headline" class="font-size-9 mt1 mb2">AaBbCc1234</p>
    <p class="font-size-5 mb2">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br >
      abcdefghijklmnopqrstuvwxyz<br >
      1234567890<br >
      #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</p>

    <p v-if="text">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br >
      abcdefghijklmnopqrstuvwxyz<br >
      1234567890<br >
      #*@$%&amp;_.-,&ndash;;:&mdash;?!&lsquo;&rsquo;&ldquo;&rdquo;()</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    weight: {
      type: String,
      default: ''
    },
    italic: {
      type: Boolean,
      default: true
    },
    headline: {
      type: Boolean,
      default: true
    },
    text: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .font-size-9 { font-size: 8em; }
  .font-size-5 { font-size: 4em; }
  .italic { font-style: italic; }
  .fw100 { font-weight: 100; }
  .fw200 { font-weight: 200; }
  .fw300 { font-weight: 300; }
  .fw400 { font-weight: 400; }
  .fw500 { font-weight: 500; }
  .fw600 { font-weight: 600; }
  .fw700 { font-weight: 700; }
  .fw800 { font-weight: 800; }
  .fw900 { font-weight: 900; }
</style>
