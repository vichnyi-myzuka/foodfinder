<template>
  <v-btn
    v-if="!isCartEmpty"
    color="success"
    class="to-cart"
    elevation="0"
    @click="goToCart"
  >
    до кошика
    <span class="counter">
      {{ getCartCount }}
    </span>
  </v-btn>
</template>
<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'ToCartButton',
  computed: {
    ...mapGetters(['isCartEmpty', 'getCartCount'])
  },
  methods: {
    goToCart () {
      this.$router.push({
        name: '🛒 Кошик'
      })
    }
  }
})
</script>
<style lang="sass">
  @import "styles"
</style>
