import { getDishes } from './API'
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
