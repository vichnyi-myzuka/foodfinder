import { getDishes, getProducts, getDishesLabels, getProductsLabels } from './API'
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
  store.dispatch('clearProducts')
  getProducts().then(response => {
    const data = response.data
    console.log(data)
    for (const product of data) {
      store.dispatch('addProduct', product)
    }
  }).catch(e => {
    console.log(e)
  })
}

export async function loadAllLabels () {
  store.dispatch('clearLabels')
  try {
    const response = await getProductsLabels()
    const responseData = response.data
    for (const label of responseData) {
      await store.dispatch('addProductLabel', label)
    }
  } catch (e) {
    console.log(e)
  }
  try {
    const response = await getDishesLabels()
    const responseData = response.data
    for (const label of responseData) {
      console.log(label)
      await store.dispatch('addDishLabel', label)
    }
  } catch (e) {
    console.log(e)
  }
}
