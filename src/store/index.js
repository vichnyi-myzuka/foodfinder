import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    labels: ["М'ясо", 'Молочка', 'Овочі', 'Фрукти', 'Спеції'],
    products: JSON.parse(localStorage.getItem('products')) || [],
    dishes: [],
    cart: []
  },
  mutations: {
    addLabel (state, value) {
      state.labels.push(value)
    },
    addDish (state, value) {
      state.dishes.push(value)
    },
    addProduct (state, value) {
      state.products.push(value)
      localStorage.setItem('products', JSON.stringify(state.products))
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
    },
    removeProduct (state, value) {
      const index = state.products.indexOf(value)
      if (index > -1) {
        state.products.splice(index, 1)
      }
      localStorage.setItem('products', JSON.stringify(state.products))
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
    },
    addProduct (context, value) {
      return context.commit('addProduct', value)
    },
    removeProduct (context, value) {
      return context.commit('removeProduct', value)
    },
    addLabel (context, value) {
      return context.commit('addLabel', value)
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
    },
    getLabels: state => {
      return state.labels
    },
    getProducts: state => {
      return state.products
    }
  },
  modules: {
  }
})
