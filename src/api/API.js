import Axios from 'axios'
export function getDishes () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/dishes')
}

export function getProducts () {
  return Axios.get('https://meal-shopping-assistant.herokuapp.com/products')
}

export function getLabels () {
  return Axios.get('http://localhost:4040/labels')
}
