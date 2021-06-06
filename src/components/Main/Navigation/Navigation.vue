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
      </transition>
      <NavigationMenu v-if="isDishesPage"/>
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
import NavigationMenu from './NavigationMenu/NavigationMenu'
export default Vue.extend({
  name: 'Navigation',
  components: {
    NavigationDrawer, NavigationMenu
  },
  computed: {
    isDishesPage () {
      return this.$route.path === '/dishes' || this.$route.path === '/products/edit' || this.$route.path ===
          '/dishes/edit'
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
