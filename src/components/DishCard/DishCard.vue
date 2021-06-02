<template>
  <v-card
    class="dish-card"
    link
    elevation="0"
  >
    <div class="ProductImage">
      <img src="https://images.pexels.com/photos/461060/pexels-photo-461060.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="">
    </div>
    <div class="DishInfo">
      <h2 class="DishTitle">
        {{ dish.title }}
      </h2>
      <p class="DishDescription">
        {{ dish.description }}
      </p>
    </div>
    <v-btn
      class="DishAddButton"
      fab
      dark
      small
      color="green lighten-2"
      elevation="0"
      v-if="!inCart"
      @click="addDishToCart(dish)"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      class="DishRemoveButton"
      fab
      dark
      small
      color="red lighten-2"
      elevation="0"
      v-if="inCart"
      @click="removeDishFromCart(dish)"
    >
      <v-icon dark>
        mdi-minus
      </v-icon>
    </v-btn>
  </v-card>
</template>
<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'
export default Vue.extend({
  name: 'DishCard',
  props: {
    dish: {
      required: true
    }
  },
  computed: {
    ...mapGetters(['dishInCart']),
    inCart () {
      return this.dishInCart(this.dish)
    }
  },
  methods: {
    ...mapActions(['addToCart', 'removeFromCart']),
    addDishToCart (dish) {
      this.addToCart(dish)
    },
    removeDishFromCart (dish) {
      this.removeFromCart(dish)
    }
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
