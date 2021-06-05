export class ListItem {
  constructor (name, value, link) {
    this._name = name
    this._value = value
    this._link = link
  };

  get link () {
    return this._link
  }

  set link (value) {
    this._link = value
  }

  get name () {
    return this._name
  }

  set name (value) {
    this._name = value
  }

  get value () {
    return this._value
  }

  set value (value) {
    this._value = value
  }
}

export class DishGroup {
  constructor (title, dishes = []) {
    this._title = title
    this._dishes = dishes
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }

  get dishes () {
    return this._dishes
  }

  set dishes (value) {
    this._dishes = value
  }
}

export class Dish {
  constructor (title, description, id, portions, products = []) {
    this._title = title
    this._description = description
    this._id = id
    this._portions = portions
    this._products = products
  }

  get portions () {
    return this._portions
  }

  set portions (value) {
    this._portions = value
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }

  get products () {
    return this._products
  }

  set products (value) {
    this._products = value
  }

  get description () {
    return this._description
  }

  set description (value) {
    this._description = value
  }

  get id () {
    return this._id
  }

  set id (value) {
    this._id = value
  }
}

export class Product {
  constructor (title) {
    this._title = title
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }
}

export class ProductGroup {
  constructor (title, products = []) {
    this._title = title
    this._products = products
  }

  get title () {
    return this._title
  }

  set title (value) {
    this._title = value
  }

  get products () {
    return this._products
  }

  set products (value) {
    this._products = value
  }
}
