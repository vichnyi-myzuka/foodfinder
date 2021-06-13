import { getDishes, getProducts, getDishesLabels, getProductsLabels } from './API'
import store from '../store/index'
export function loadAllDishes () {
  store.dispatch('clearDishes')
  getDishes().then(response => {
    const data = response.data
    for (const dish of data) {
      store.dispatch('addDish', {
        title: dish.title,
        description: dish.description,
        src: dish.src,
        portions: dish.portions,
        products: dish.products,
        id: dish.id,
        labelId: dish.labelId
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
      await store.dispatch('addDishLabel', label)
    }
  } catch (e) {
    console.log(e)
  }
}

export function mapProducts (products) {
  return products.map(product => {
    return {
      id: product.product.id,
      amount: product.amount
    }
  })
}

export function findProducts (products) {
  return products.map(product => {
    return {
      product: store.getters.getProduct(product.id),
      amount: product.amount
    }
  })
}

export function mapDishesForCart (dishes) {
  return dishes.map(dish => {
    return {
      dishId: dish.id,
      portions: dish.portions + ''
    }
  })
}

export function mapProductsForCart (products) {
  return products.map(product => {
    return {
      productId: product.id,
      amount: product.amount + ''
    }
  })
}
export function mapDishes (dishes) {
  return dishes.map(dish => {
    return {
      ...store.getters.getDish(dish.id)
    }
  })
}
