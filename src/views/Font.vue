<template>
  <div class="font">
    <type-sample
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
      loading: false,
      details: null,
      error: null
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
      this.error = this.post = null
      this.loading = true
      getPost(this.$route.params.details, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.details = post
        }
      })
    }
  }
}
</script>
