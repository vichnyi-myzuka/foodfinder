<template>
  <v-form v-model="valid" class="EditorForm" ref="editorForm">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="title"
            label="Назва"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="description"
            label="Опис"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="src"
            label="Зображення (адреса)"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="measure"
            label="Одиниці виміру"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="amount"
            label="Кількість"
            type="number"
            required
            min="0"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            v-model="price"
            label="Ціна"
            type="number"
            required
            min="0"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-combobox
            clearable
            v-model="label"
            small-chips
            label="Категорія"
            :items="labels"
            :item-text="(el) => el.title"
          >
          </v-combobox>
        </v-col>
      </v-row>
    </v-container>
    <div class="ProductImage">
      <img :src="src" alt="" v-if="src">
    </div>
  </v-form>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import uniqueId from 'lodash.uniqueid'
export default Vue.extend({
  name: 'EditorForm',
  props: {
    product: {
      required: true
    },
    active: {
      required: true
    }
  },
  watch: {
    active (value) {
      if (value === true) {
        this.assignAreas()
      }
    }
  },
  data () {
    return {
      labels: [],
      valid: true,
      title: '',
      description: '',
      src: '',
      measure: 'шт',
      amount: 0,
      label: '',
      price: 0
    }
  },
  computed: {
    ...mapGetters(['getLabels'])
  },
  methods: {
    resetForm () {
      this.$refs.editorForm.reset()
    },
    getFormData () {
      return {
        title: this.title,
        description: this.description,
        src: this.src,
        measure: this.measure,
        amount: this.amount,
        price: this.price,
        label: this.label
      }
    },
    assignAreas () {
      this.title = this.product.title
      this.description = this.product.description
      this.src = this.product.src
      this.measure = this.product.measure
      this.amount = this.product.amount
      this.label = this.product.label
      this.price = this.product.price
    },
    getUniqueId (value) {
      return uniqueId(value)
    }
  },
  async mounted () {
    this.labels = this.getLabels
    this.assignAreas()
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
