<template>
  <div class="font">
    <type-sample
      v-if="details"
      :title="details.title"
      :weight="details.weight"
      :italic="details.italic"
      :headline="details.headline"
      :text="details.text"
    />
  </div>
</template>

<script>
import TypeSample from '@/components/TypeSample'

export default {
  components: {
    typeSample: TypeSample
  },
  data () {
    return {
      details: false
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.details = this.$route.params.details
    }
  }
}
</script>
