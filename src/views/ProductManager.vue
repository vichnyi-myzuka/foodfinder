<template>
  <div class="ProductManager">
    <EmptyShower
      v-if="noProducts"
      title="продуктів"
      description="натисніть на кнопку '+', щоб додати продукти"
    />
    <ProductAdder v-model="addModal" @adder:addedProduct="updateProducts"/>
    <ProductEditor
      ref="productEditor"
      :product="productSelected"
      v-model="editModal"
      @input="closeEdit"
      @editor:editedProduct="updateProducts"/>
    <ActionButton :eventHandler="openAddModal"/>
    <ProductList v-if="!noProducts" @product:selected="changeSelectedProduct" ref="productList"/>
  </div>
</template>
<script>
import Vue from 'vue'
import ActionButton from '../components/Main/Buttons/ActionButton/ActionButton'
import EmptyShower from '../components/Main/EmptyShower/EmptyShower'
import ProductAdder from '../components/Pages/ProductManager/ProductAdder/ProductAdder'
import ProductList from '../components/Pages/ProductManager/ProductList/ProductList'
import ProductEditor from '../components/Pages/ProductManager/ProductEditor/ProductEditor'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'ProductManager',
  components: {
    ActionButton, EmptyShower, ProductAdder, ProductList, ProductEditor
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
      addModal: false,
      editModal: false,
      productSelected: {}
    }
  },
  methods: {
    openAddModal () {
      this.addModal = true
    },
    openEditModal () {
      this.editModal = true
    },
    reassignArea () {
      if (this.$refs.productEditor) { this.$refs.productEditor.reassignArea() }
    },
    closeEdit () {
      this.productSelected = {}
    },
    updateProducts () {
    },
    changeSelectedProduct (value) {
      this.productSelected = value
      this.openEditModal()
      this.reassignArea()
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
