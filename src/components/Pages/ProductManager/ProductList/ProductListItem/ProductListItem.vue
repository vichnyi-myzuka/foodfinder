<template>
    <v-card
      class="ProductListItem"
      link
      elevation="0"
    >
      <div class="ProductDetails">
        <div class="ProductAmount">
          {{product.amount + " " + product.measure + "/" + product.price + "UAH"}}
        </div>

      </div>
      <div class="ProductImage">
        <img :src="product.src" alt="">
      </div>
      <div class="ProductInfo">
        <h2 class="ProductTitle">
          {{ product.title }}
        </h2>
        <p class="ProductDescription">
          {{ product.description }}
        </p>
      </div>
      <v-btn
        class="ProductRemoveButton"
        fab
        dark
        small
        color="red lighten-2"
        elevation="0"
        @click="removeProduct"
      >
        <v-icon dark>
          mdi-minus
        </v-icon>
      </v-btn>
    </v-card>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ProductListItem',
  props: {
    product: {
      required: true
    }
  },
  methods: {
    removeProduct () {
      this.$emit('removeProduct', this.product)
    }
  }
})
</script>
<style lang="sass" scoped>
    @import "styles"
</style>
