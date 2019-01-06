<template>
  <div class="add-family">
    <h1>Add a family</h1>
    <form @submit.prevent="saveFamily()">
      <fieldset>
        <text-input
          :label="'Family name'"
          :required="true"
          v-model="title"
        />
        <text-area
          :label="'Embed code'"
          :markdown="false"
          v-model="embed"
        />
      </fieldset>
      <fieldset v-for="(font, key) in fonts" :key="key">
        <text-input
          :label="'Font name'"
          :required="true"
          v-model="fonts[key].title"
        />
        <text-input
          :label="'Font short name'"
          :required="true"
          v-model="fonts[key].name"
        />
        <text-input
          :label="'File name'"
          v-model="fonts[key].file"
        />
        <select-input
          :label="'Weight'"
          :options="[
            {
              value: '',
              label: 'Select one'
            },
            {
              value: '100',
              label: '100'
            },
            {
              value: '200',
              label: '200'
            },
            {
              value: '300',
              label: '300'
            },
            {
              value: '400',
              label: '400'
            },
            {
              value: '500',
              label: '500'
            },
            {
              value: '600',
              label: '600'
            },
            {
              value: '700',
              label: '700'
            },
            {
              value: '800',
              label: '800'
            },
            {
              value: '900',
              label: '900'
            }
          ]"
          v-model="fonts[key].weight"
        />
        <lw-switch
          :label="'Italic'"
          v-model="fonts[key].italic"
        />
        <lw-switch
          :label="'Headline sizes'"
          v-model="fonts[key].headline"
        />
        <lw-switch
          :label="'Text sizes'"
          v-model="fonts[key].text"
        />
      </fieldset>
      <button @click.prevent="addFont()">+ Add font</button>
      <button type="submit">Save family</button>
    </form>
  </div>
</template>

<script>
import TextInput from '@/components/TextInput'
import TextArea from '@/components/TextArea'
import SelectInput from '@/components/SelectInput'
import Switch from '@/components/Switch'
import slugify from '@/mixins/slugify'

export default {
  components: {
    textInput: TextInput,
    textArea: TextArea,
    selectInput: SelectInput,
    lwSwitch: Switch
  },
  mixins: [ slugify ],
  data () {
    return {
      title: null,
      embed: null,
      fonts: [
        {
          id: 0,
          title: '',
          name: '',
          weight: '',
          italic: false,
          file: null,
          headline: true,
          text: true
        }
      ]
    }
  },
  methods: {
    addFont () {
      const id = this.fonts.slice(-1).id++
      this.fonts.push({
        id: id,
        title: '',
        name: '',
        weight: '',
        italic: false,
        file: null,
        headline: true,
        text: true
      })
    },
    saveFamily () {
      const family = {}
      family.id = this.$store.getters.families.slice(-1).id++
      family.title = this.title
      family.name = this.slugify(this.title)
      family.embed = this.embed ? this.embed : false
      family.fonts = this.fonts
      this.$store.dispatch('addFamily', family)
      this.title = null
      this.embed = null
      this.fonts = [
        {
          id: 0,
          title: '',
          name: '',
          weight: '',
          italic: false,
          file: null,
          headline: true,
          text: true
        }
      ]
    }
  }
}
</script>
