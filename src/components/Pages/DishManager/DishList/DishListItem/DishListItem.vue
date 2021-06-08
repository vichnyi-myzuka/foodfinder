<template>
  <v-card
    class="DishListItem"
    link
    elevation="0"
    @click="isClicked"
  >
    <div class="DishImage"
         v-if="dish.src"
    >
      <img :src="dish.src" alt="">
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
      class="DishRemoveButton"
      fab
      dark
      small
      color="red lighten-2"
      elevation="0"
      @click="removeDish"
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
  name: 'DishListItem',
  props: {
    dish: {
      required: true
    }
  },
  methods: {
    removeDish () {
      this.$emit('removeDish', this.dish)
    },
    isClicked () {
      this.$emit('dishClicked', this.dish)
    }
  }
})
</script>
<style lang="sass" scoped>
  @import "styles"
</style>
