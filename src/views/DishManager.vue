<template>
  <div class="ProductManager">
    <EmptyShower
      v-if="noProducts"
      title="продуктів"
      description="натисніть на кнопку '+', щоб додати страви"
    />
    <DishAdder v-model="addModal" @adder:addedProduct="updateProducts"/>
    <ProductEditor
      ref="productEditor"
      :product="productSelected"
      v-model="editModal"
      @input="closeEdit"
      @editor:editedProduct="updateProducts"/>
    <ActionButton :eventHandler="openAddModal"/>
  </div>
</template>
<script>
import Vue from 'vue'
import ActionButton from '../components/Main/Buttons/ActionButton/ActionButton'
import EmptyShower from '../components/Main/EmptyShower/EmptyShower'
import DishAdder from '../components/Pages/DishManager/DishAdder/DishAdder'
import ProductEditor from '../components/Pages/ProductManager/ProductEditor/ProductEditor'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'DishManager',
  components: {
    ActionButton, EmptyShower, ProductEditor, DishAdder
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
