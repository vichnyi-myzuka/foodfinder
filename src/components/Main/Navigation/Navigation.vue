<template>
  <nav class="NavigationBar">
    <v-app-bar
      color="amber lighten-2"
      elevation="0"
      prominent
    >
      <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>
      <transition name="fade" mode="out-in">
      <v-toolbar-title :key="this.$route.name ">{{ this.$route.name }}</v-toolbar-title>
      </transition>
      <v-spacer></v-spacer>
      <transition name="fade" mode="out-in">
      <div class="wrapper" v-if="isDishesPage">
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </div>
      </transition>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <navigation-drawer/>
  </nav>
</template>

<script>
import Vue from 'vue'
import { mapActions } from 'vuex'
import NavigationDrawer from './NavigationDrawer/NavigationDrawer'
export default Vue.extend({
  name: 'Navigation',
  components: {
    NavigationDrawer
  },
  computed: {
    isDishesPage () {
      return this.$route.name === 'Страви'
    }
  },
  methods: {
    ...mapActions(['setDrawer']),
    openDrawer () {
      this.setDrawer(true)
    }
  }
})
</script>

<style lang="sass">
  @import "styles"
</style>
