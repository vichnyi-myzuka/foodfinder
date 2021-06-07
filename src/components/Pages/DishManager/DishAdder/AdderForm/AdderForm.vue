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
            v-model="portions"
            label="Кількість порцій"
            type="number"
            required
            min="1"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
        <v-card-title>
          Додати продукти
        </v-card-title>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
        <div class="ProductsContainer">
          <ProductItem v-for="(product, index) in products" :key="index" :index="index"/>
        </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="DishImage">
      <img :src="src" alt="" v-if="src">
    </div>
  </v-form>
</template>
<script>
import Vue from 'vue'
import uniqueId from 'lodash.uniqueid'
import ProductItem from './ProductItem/ProductItem'
export default Vue.extend({
  name: 'AdderForm',
  components: {
    ProductItem
  },
  data () {
    return {
      labels: [],
      valid: true,
      title: '',
      description: '',
      src: '',
      portions: 1,
      products: [{

      }, {

      }]
    }
  },
  computed: {
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
        portions: this.portions
      }
    },
    getUniqueId (value) {
      return uniqueId(value)
    }
  },
  async mounted () {
  }
})
</script>
<style lang="sass" scoped>
  @import "styles"
</style>
