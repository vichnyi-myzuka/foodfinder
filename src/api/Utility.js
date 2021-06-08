import { getDishes, getProducts, getLabels } from './API'
import store from '../store/index'
export function loadAllDishes () {
  getDishes().then(response => {
    const data = response.data
    for (const dish of data) {
      store.dispatch('addDish', {
        title: dish.title,
        description: dish.description,
        src: dish.src,
        portions: dish.portions,
        products: dish.products
      })
    }
  }).catch(e => {
    console.log(e)
  })
}

export function loadAllProducts () {
  getProducts().then(response => {
    const data = response.data
    for (const product of data) {
      store.dispatch('addProduct', product)
    }
  }).catch(e => {
    console.log(e)
  })
}

export function loadAllLabels () {
  getLabels().then(response => {
    const data = response.data
    for (const label of data) {
      store.dispatch('addLabel', label)
    }
  }).catch(e => {
    console.log(e)
  })
}
