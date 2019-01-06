<template>
  <div class="fixed left-0 right-0 top-0 bottom-0 reverse flex align-items-center justify-content-center reverse">
    <svg-loader/>
  </div>
</template>

<script>
import Loader from '../svgs/Loader'

export default {
  components: {
    svgLoader: Loader
  }
}
</script>
