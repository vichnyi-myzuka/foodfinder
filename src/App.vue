<template>
  <div id="app">
    <v-app>
      <v-main>
        <Navigation/>
          <div class="wrapper">
            <transition name="fade" mode="out-in">
              <router-view/>
            </transition>
          </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Vue from 'vue'
import Navigation from './components/Main/Navigation/Navigation'
import { mapActions } from 'vuex'
import { loadAllDishes, loadAllProducts, loadAllLabels } from './api/Utility'

export default Vue.extend({
  name: 'App',
  components: { Navigation },
  methods: {
    ...mapActions(['addDish'])
  },
  async mounted () {
    await loadAllLabels()
    loadAllProducts()
    loadAllDishes()
  }
})
</script>
<style lang="sass">
  @import "sass/main"
  #app
    font-family: "Manrope", sans-serif
    .v-main__wrap
      & > .wrapper
        padding: 2rem 4rem
        @media screen and (max-width: 720px)
          padding: 2rem 1rem
</style>
