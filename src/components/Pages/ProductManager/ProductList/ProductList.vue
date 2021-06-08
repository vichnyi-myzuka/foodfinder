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
import { mapGetters } from 'vuex'
import hash from 'object-hash'
import some from 'lodash.some'
import { sortBy } from 'lodash'
import { deleteProduct } from '../../../../api/API'
import ProductListItem from './ProductListItem/ProductListItem'
export default Vue.extend({
  name: 'ProductList',
  components: {
    ProductListItem
  },
  props: {
    selectedLabels: Array
  },
  computed: {
    ...mapGetters(['getProducts', 'getSearchQuery']),
    productsToDisplay () {
      let toDisplay = this.getProducts
      toDisplay = sortBy(toDisplay, ['title'])
      if (this.getSearchQuery) {
        toDisplay = toDisplay.filter(el => el.title.includes(this.getSearchQuery))
      }
      if (this.selectedLabels.length > 0) {
        toDisplay = toDisplay.filter(el => some(this.selectedLabels, el.label))
      }
      return toDisplay
    }

  },
  methods: {
    removeProductFromStore (value) {
      deleteProduct(value).then(response => {
        this.$emit('product:deleted')
      }).catch(e => console.log(e))
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
