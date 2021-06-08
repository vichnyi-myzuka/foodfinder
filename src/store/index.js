import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    labels: [],
    products: [],
    dishes: [],
    cart: [],
    toolbar: {
      searchIsActive: false,
      searchQuery: ''
    }
  },
  mutations: {
    saveProduct (state, values) {
      const index = state.products.indexOf(values.oldProduct)
      const updated = state.products.concat()
      if (index > -1) {
        updated[index] = values.newProduct
        state.products = updated
      }
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    saveDish (state, values) {
      const index = state.dishes.indexOf(values.oldDish)
      const updated = state.dishes.concat()
      if (index > -1) {
        updated[index] = values.newDish
        state.dishes = updated
      }
      localStorage.setItem('dishes', JSON.stringify(state.dishes))
    },
    setSearchQuery (state, value) {
      state.toolbar.searchQuery = value
    },
    setSearchState (state) {
      state.toolbar.searchIsActive = !state.toolbar.searchIsActive
    },
    clearSearch (state) {
      state.toolbar.searchIsActive = false
      state.toolbar.searchQuery = ''
    },
    addLabel (state, value) {
      state.labels.push(value)
    },
    addDish (state, value) {
      state.dishes.push(value)
      localStorage.setItem('dishes', JSON.stringify(state.dishes))
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
    },
    removeDish (state, value) {
      const index = state.dishes.indexOf(value)
      if (index > -1) {
        state.dishes.splice(index, 1)
      }
      localStorage.setItem('dishes', JSON.stringify(state.dishes))
    }
  },
  actions: {
    saveProduct (context, values) {
      return context.commit('saveProduct', values)
    },
    saveDish (context, values) {
      return context.commit('saveDish', values)
    },
    clearSearch (context) {
      return context.commit('clearSearch')
    },
    setSearchQuery (context, value) {
      return context.commit('setSearchQuery', value)
    },
    setDrawer (context, value) {
      return context.commit('setDrawer', value)
    },
    setSearchState (context) {
      return context.commit('setSearchState')
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
    },
    removeDish (context, value) {
      return context.commit('removeDish', value)
    }
  },
  getters: {
    getSearchQuery (state) {
      return state.toolbar.searchQuery
    },
    getSearchState (state) {
      return state.toolbar.searchIsActive
    },
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
