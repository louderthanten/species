<template>
  <div :class="[error ? 'error' : '', tip ? 'has-tip' : '']" class="field">
    <label :for="name">{{ label }} <span v-if="error" class="error dark-red-text font-size-1 line-height-1 medium sans ml1 inline-block">{{ error }}</span></label>
    <template v-if="tip"><lw-tip  :content="tip"><svg-info/></lw-tip></template>
    <figure v-if="image" class="mb1 block c3x2">
      <img :src="imageUrl" alt="File upload">
    </figure>
    <p v-if="error" class="error">{{ error }}</p>
    <button :class="[ size + '-button', colour + '-button']" :disabled="disabled" class="full-button_mb" @click.prevent="onPickFile"><svg-upload/> <slot>Upload</slot></button>
    <input ref="fileInput" :name="name" :accept="accept" type="file" class="hidden" @change="onFilePicked">
    <p v-if="hint" class="font-size-1 m0 measure-wide" v-html="hint"/>
  </div>
</template>

<script>
import Upload from '../svgs/Upload'
import Tip from './Tip'

export default {
  components: {
    svgUpload: Upload,
    lwTip: Tip
  },
  props: {
    label: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'default'
    },
    colour: {
      type: String,
      default: 'accent'
    },
    accept: {
      type: String,
      default: 'image/*'
    },
    tip: {
      type: String,
      default: null
    },
    hint: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: [String, File],
      default: null
    }
  },
  data () {
    return {
      error: '',
      image: null,
      imageUrl: ''
    }
  },
  mounted () {
    this.imageUrl = this.placeholder
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        this.error = 'Please upload a valid file.'
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      this.$emit('input', this.image)
    }
  }
}
</script>
