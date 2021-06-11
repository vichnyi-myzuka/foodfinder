<template>
  <v-card
    class="ProductItem"
    elevation="0"
  >
    <v-combobox
      class="ProductChooser"
      label="Продукт"
      small-chips
      :items="products"
      :item-text="(el) => el.title"
      :item-value="(el) => el"
      v-model="productChosen"
      ref="combo"
      @input="updateProduct"
      @change="refocus"
      solo
    >
    </v-combobox>
    <v-text-field
      class="elevation-0 ProductAmount"
      solo
      ref="amount"
      type="number"
      v-model="amount"
      @input="updateProduct"
      min="0"
      :prefix="measure"
      @keydown="addProduct"
    >{{ measure }}</v-text-field>
    <v-btn
      class="ProductItemRemoveButton"
      fab
      dark
      small
      @click="removeProduct"
      color="red lighten-2"
      elevation="0"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </v-card>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
import hash from 'object-hash'
export default Vue.extend({
  name: 'ProductItem',
  props: {
    index: Number,
    product: Object
  },
  computed: {
    ...mapGetters(['getProducts', 'getProduct']),
    measure () {
      if (this.productChosen) return this.productChosen.measure
      return ''
    }
  },
  data () {
    return {
      products: [],
      productChosen: '',
      amount: 0
    }
  },
  methods: {
    addProduct (e) {
      if (e.keyCode === 13) {
        this.$emit('addProduct')
      }
    },
    refocus (e) {
      if (e.keyCode !== 9) { this.$refs.amount.focus() }
    },
    removeProduct () {
      this.$emit('product:remove', this.product)
    },
    updateProduct (e) {
      this.$emit('product:updated', {
        old: this.product,
        product: this.productChosen,
        amount: this.amount + '',
        index: this.index
      })
    },
    hashFunction (object) {
      return hash(object)
    }
  },
  async mounted () {
    this.products = this.getProducts
    if (this.product.id) { this.productChosen = this.getProduct(this.product.id) }
    if (this.product.product) { this.productChosen = this.product.product }
    if (this.product.amount) { this.amount = this.product.amount }
    this.$refs.combo.focus()
  }
})
</script>
<style lang="sass">
    @import "styles"
</style>
