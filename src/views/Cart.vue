<template>
  <div class="Cart">
    <FinalList/>
    <section class="Dishes">
      <DishCard v-for="dish in getObjectCart.dishes" @dish:deleted="loadCart" :key="dish.title" :dish="dish"/>
      <h2 class="FinalPrice">{{
        "Фінальна ціна: " + getLoadedCart.price + " грн"
        }}</h2>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import { getList } from '../api/API'
import DishCard from '../components/DishCard/DishCard'
import FinalList from '../components/Pages/Cart/FinalList/FinalList'
export default Vue.extend({
  name: 'Cart',
  computed: {
    ...mapGetters(['getCart', 'getLoadedCart', 'getObjectCart']),
    getObjectDishes () {
      return this.getCart.dishes
    }
  },
  components: {
    DishCard, FinalList
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions(['setLoadedCart']),
    async loadCart () {
      const cart = await this.getCart
      getList(cart).then(response => {
        const data = response.data
        this.setLoadedCart(data)
      }).catch(e => console.log(e))
    }
  },
  async mounted () {
    this.loadCart()
  }
})
</script>
<style lang="sass">
  @import "../sass/views/Cart"
</style>
