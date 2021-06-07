import Axios from 'axios'
export function getDishes () {
  return Axios.get('http://localhost:4040/dishes')
}

export function getProducts () {
  return Axios.get('http://localhost:4040/products')
}

export function getLabels () {
  return Axios.get('http://localhost:4040/labels')
}
