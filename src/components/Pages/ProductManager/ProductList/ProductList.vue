<template>
    <section class="ProductList">
      <ProductListItem v-for="product in products" :product="product" :key="product.title"
                       @removeProduct="removeProductFromStore"/>
    </section>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import ProductListItem from './ProductListItem/ProductListItem'
export default Vue.extend({
  name: 'ProductList',
  components: {
    ProductListItem
  },
  computed: {
    ...mapGetters(['getProducts'])
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    ...mapActions(['removeProduct']),
    removeProductFromStore (value) {
      this.removeProduct(value)
    }
  },
  async mounted () {
    this.products = this.getProducts
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
