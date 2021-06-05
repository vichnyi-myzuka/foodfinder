<template>
  <div class="ProductManager">
    <EmptyShower
      v-if="noProducts"
      title="продуктів"
      description="натисніть на кнопку '+', щоб додати продукти"
    />
    <ProductAdder v-model="addModal" @adder:addedProduct="updateProducts"/>
    <ActionButton :eventHandler="openAddModal"/>
    <ProductList v-if="!noProducts"/>
  </div>
</template>
<script>
import Vue from 'vue'
import ActionButton from '../components/Main/Buttons/ActionButton/ActionButton'
import EmptyShower from '../components/Main/EmptyShower/EmptyShower'
import ProductAdder from '../components/Pages/ProductManager/ProductAdder/ProductAdder'
import ProductList from '../components/Pages/ProductManager/ProductList/ProductList'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'ProductManager',
  components: {
    ActionButton, EmptyShower, ProductAdder, ProductList
  },
  computed: {
    ...mapGetters(['getProducts']),
    noProducts () {
      return this.products.length === 0
    }
  },
  data () {
    return {
      products: [],
      addModal: false
    }
  },
  methods: {
    openAddModal () {
      this.addModal = true
    },
    updateProducts () {
    }
  },
  mounted () {
    this.products = this.getProducts
  }
})
</script>
<style lang="sass">
  @import "../sass/views/ProductManager"
</style>
