<template>
  <section class="drawer">
    <v-navigation-drawer
      v-model="drawerState"
      absolute
      bottom
      temporary
    >
      <div class="logo">
        <img src="@/assets/logo.svg" alt="">
      </div>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="linksState"
        >
          <v-list-item v-for="page in pages" :key="page.name" :value="page.value">
            <v-list-item-title >
              {{ page.name }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <h3 class="Title">АДМІН</h3>
          <v-list-item v-for="page in adminPages" :key="page.name" :value="page.value">
            <v-list-item-title >
              {{ page.name }}
            </v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <h3 class="Title">JSON</h3>
        </v-list-item-group>
        <v-list-item @click="copyAllProducts">
          <v-list-item-title >
            📋 Скопіювати всі продукти
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="copyAllDishes">
          <v-list-item-title >
            📋 Скопіювати всі страви
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>

<script>
import Vue from 'vue'
import { ListItem } from '../../../../api/Classes'
import { mapGetters, mapActions } from 'vuex'
export default Vue.extend({
  name: 'NavigationDrawer',
  props: {
    drawer: Boolean
  },
  computed: {
    ...mapGetters(['getDrawerState', 'getProducts', 'getDishes']),
    drawerState: {
      get () {
        return this.getDrawerState
      },
      set (val) {
        if (!val) this.setDrawer(false)
        else this.setDrawer(true)
      }
    },
    linksState: {
      get () {
        return this.$route.name
      },
      set (val) {
        if (this.$route.path !== val) { this.$router.push(val) }
        this.setDrawer(false)
      }
    }
  },
  data () {
    return {
      pages: [new ListItem('🏠 Головна ', '/'),
        new ListItem('🥧 Страви', '/dishes'),
        new ListItem('🛒 Кошик', '/cart')],
      adminPages: [new ListItem('🍎 Редактор продуктів', '/products/edit'),
        new ListItem('🥧 Редактор страв', '/dishes/edit')]
    }
  },
  methods: {
    ...mapActions(['setDrawer']),
    closeDrawer () {
      this.setDrawer(false)
    },
    copyAllProducts () {
      const el = document.createElement('textarea')
      el.value = JSON.stringify(this.getProducts)
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    },
    copyAllDishes () {
      const el = document.createElement('textarea')
      el.value = JSON.stringify(this.getDishes)
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
  }
})
</script>

<style lang="sass">
  @import "styles"
</style>
