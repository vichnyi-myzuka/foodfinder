<template>
  <div class="home">
    <h1>Вас вітає FoodFinder!</h1>
    <p>
      Наш сервіс допоможе вам правильно розрахувати кількість продуктів, що вам треба
      купити, для приготування страви!
    </p>
    <h2>
      Перейдіть до розділів, щоб додати страви
    </h2>
    <v-btn color="success" @click="setDrawer(true)" elevation="0" class="button">Перейти</v-btn>
    <ToCartButton/>
  </div>
</template>

<script>
import ToCartButton from '../components/Main/Buttons/ToCartButton/ToCartButton'
import Vue from 'vue'
import { mapActions } from 'vuex'
export default Vue.extend({
  name: 'Home',
  components: {
    ToCartButton
  },
  methods: {
    ...mapActions(['setDrawer'])
  }
})
</script>
<style lang="sass">
  @import "../sass/views/Home"
</style>
