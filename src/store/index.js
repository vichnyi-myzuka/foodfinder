import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    dishes: [],
    cart: []
  },
  mutations: {
    addDish (state, value) {
      state.dishes.push(value)
    },
    setDrawer (state, value) {
      state.drawer = value
    },
    addToCart (state, value) {
      state.cart.push(value)
    },
    removeFromCart (state, value) {
      const index = state.cart.indexOf(value)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    }
  },
  actions: {
    setDrawer (context, value) {
      return context.commit('setDrawer', value)
    },
    addToCart (context, value) {
      return context.commit('addToCart', value)
    },
    removeFromCart (context, value) {
      return context.commit('removeFromCart', value)
    },
    addDish (context, value) {
      return context.commit('addDish', value)
    }
  },
  getters: {
    getDrawerState (state) {
      return state.drawer
    },
    isCartEmpty (state) {
      return state.cart.length === 0
    },
    getCartCount (state) {
      return state.cart.length
    },
    dishInCart: state => dish => {
      return state.cart.indexOf(dish) > -1
    },
    getDishes: state => {
      return state.dishes
    }
  },
  modules: {
  }
})
