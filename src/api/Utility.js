import { getDishes, getProducts, getLabels } from './API'
import store from '../store/index'
import { Dish } from './Classes'
export function loadAllDishes () {
  getDishes().then(response => {
    const data = response.data
    for (const dish of data) {
      store.dispatch('addDish', new Dish(dish.title, dish.description, dish.id, dish.portions, dish.products))
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
