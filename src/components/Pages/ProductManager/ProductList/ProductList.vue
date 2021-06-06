<template>
    <section class="ProductList">
      <ProductListItem v-for="product in productsToDisplay" :product="product" :key="hashFunction(product)"
                       @removeProduct="removeProductFromStore"
                       @productClicked="productChosen"
      />
    </section>
</template>
<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import hash from 'object-hash'
import ProductListItem from './ProductListItem/ProductListItem'
export default Vue.extend({
  name: 'ProductList',
  components: {
    ProductListItem
  },
  computed: {
    ...mapGetters(['getProducts', 'getSearchQuery']),
    productsToDisplay () {
      if (!this.getSearchQuery) {
        return this.getProducts
      } return this.getProducts.filter(el => el.title.includes(this.getSearchQuery))
    }

  },
  methods: {
    ...mapActions(['removeProduct']),
    removeProductFromStore (value) {
      this.removeProduct(value)
    },
    productChosen (value) {
      this.$emit('product:selected', value)
    },
    hashFunction (object) {
      return hash(object)
    }
  },
  async mounted () {
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
