<template>
  <div class="dishes">
    <h1>Основні страви</h1>
    <div class="DishesWrapper">
      <DishCard v-for="(dish, i) in getDishes" :key="i" :dish="dish"/>

    </div>
    <ToCartButton/>
  </div>
</template>
<script>
import Vue from 'vue'
import ToCartButton from '../components/Main/Buttons/ToCartButton/ToCartButton'
import DishCard from '../components/DishCard/DishCard'
import { mapGetters } from 'vuex'
export default Vue.extend({
  name: 'Dishes',
  components: {
    ToCartButton, DishCard
  },
  computed: {
    ...mapGetters(['getDishes'])
  }
})
</script>
<style lang="sass">
  @import "../sass/views/Dishes"
</style>
