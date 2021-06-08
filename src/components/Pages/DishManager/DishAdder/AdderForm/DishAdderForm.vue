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

        <v-card-title>
          Додати продукти
        </v-card-title>
        <v-col
          cols="12"
          md="12"
        >
        <div class="ProductsContainer">
          <ProductItem v-for="(product, index) in products"
                       :product="product"
                       :key="index"
                       :index="index"
                       @product:remove="removeProduct"
                       @product:updated="updateProduct"
          />
        </div>
        <AddProductButton :action="addProduct"/>
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
import ProductItem from '../../DishEditor/EditorForm/ProductItem/ProductItem'
import AddProductButton from '../../../../Main/Buttons/AddProductButton/AddProductButton'
export default Vue.extend({
  name: 'DishAdderForm',
  components: {
    ProductItem, AddProductButton
  },
  data () {
    return {
      labels: [],
      valid: true,
      title: '',
      description: '',
      src: '',
      portions: 1,
      products: [{}]
    }
  },
  computed: {
  },
  methods: {
    updateProduct (value) {
      this.products[value.index] = {
        product: value.product,
        amount: value.amount
      }
    },
    resetForm () {
      this.$refs.adderForm.reset()
      this.products = [{}]
    },
    getFormData () {
      return {
        title: this.title,
        description: this.description,
        src: this.src,
        portions: this.portions,
        products: this.products
      }
    },
    getUniqueId (value) {
      return uniqueId(value)
    },
    removeProduct (value) {
      const index = this.products.indexOf(value)
      if (index > -1) {
        this.products.splice(index, 1)
      }
    },
    addProduct () {
      this.products = [...this.products, {}]
    }
  }
})

</script>
<style lang="sass" scoped>
  @import "styles"
</style>
