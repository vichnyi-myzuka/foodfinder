<template>
  <v-form v-model="valid" class="AdderForm" ref="adderForm">
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
            small-chips
            label="Категорія"
            :items="labels"
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
export default Vue.extend({
  name: 'AdderForm',
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
      this.$refs.adderForm.reset()
    },
    getFormData () {
      return {
        title: this.title,
        description: this.description,
        src: this.src,
        measure: this.measure,
        amount: this.amount,
        price: this.price
      }
    }
  },
  async mounted () {
    this.labels = this.getLabels
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
