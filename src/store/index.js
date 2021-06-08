import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    labels: {
      products: [],
      dishes: []
    },
    products: [],
    dishes: [],
    cart: [],
    toolbar: {
      searchIsActive: false,
      searchQuery: ''
    }
  },
  mutations: {
    clearLabels (state) {
      state.labels = {
        products: [],
        dishes: []
      }
    },
    clearProducts (state) {
      state.products = []
    },
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
    addProductLabel (state, value) {
      state.labels.products.push(value)
    },
    addDishLabel (state, value) {
      state.labels.dishes.push(value)
    },
    updateProductLabel (state, value) {
      const index = state.labels.products.findIndex(el => el.id === value.id)
      const updated = state.labels.products.concat()
      if (index > -1) {
        updated[index] = value
        state.labels.products = updated
      }
    },
    updateDishLabel (state, value) {
      const index = state.labels.dishes.findIndex(el => el.id === value.id)
      const updated = state.labels.dishes.concat()
      if (index > -1) {
        updated[index] = value
        state.labels.dishes = updated
      }
    },
    removeProductLabel (state, value) {
      const index = state.labels.products.findIndex(el => el.id === value.id)
      if (index > -1) {
        state.labels.products.splice(index, 1)
      }
    },
    removeDishLabel (state, value) {
      const index = state.labels.dishes.findIndex(el => el.id === value.id)
      if (index > -1) {
        state.labels.dishes.splice(index, 1)
      }
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
    clearLabels (context) {
      return context.commit('clearLabels')
    },
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
    clearProducts (context) {
      return context.commit('clearProducts')
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
    addProductLabel (context, value) {
      return context.commit('addProductLabel', value)
    },
    addDishLabel (context, value) {
      return context.commit('addDishLabel', value)
    },
    updateProductLabel (context, value) {
      return context.commit('updateProductLabel', value)
    },
    updateDishLabel (context, value) {
      return context.commit('updateDishLabel', value)
    },
    removeProductLabel (context, value) {
      return context.commit('removeProductLabel', value)
    },
    removeDishLabel (context, value) {
      return context.commit('removeDishLabel', value)
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
    getProductsLabels: state => {
      return state.labels.products
    },
    getDishesLabels: state => {
      return state.labels.dishes
    },
    getProducts: state => {
      return state.products
    }
  },
  modules: {
  }
})
