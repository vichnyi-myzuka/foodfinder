<template>
  <v-card
    class="ProductItem"
    elevation="0"
  >
    <p class="ProductItemIndex">
      {{ index + "." }}
    </p>
    <v-combobox
      class="ProductChooser"
      label="Продукт"
      chips
      :items="products"
      :item-text="(el) => el.title"
      :item-value="(el) => el"
      v-model="productChosen"
      solo
    >
    </v-combobox>
    <v-text-field
      label="Кількість"
      class="elevation-0"
      solo
      v-model="amount"
    >{{ measure }}</v-text-field>
    <v-btn
      class="ProductItemRemoveButton"
      fab
      dark
      small
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
export default Vue.extend({
  name: 'ProductItem',
  props: {
    index: Number
  },
  computed: {
    ...mapGetters(['getProducts']),
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
  async mounted () {
    this.products = this.getProducts
  }
})
</script>
<style lang="sass">
    @import "styles"
</style>
