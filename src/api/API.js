import Axios from 'axios'
export function getDishes () {
  return Axios.get('http://localhost:4040/dishes')
}
