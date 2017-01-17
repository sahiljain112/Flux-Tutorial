import { dispatch, register } from './dispatchers/appDispatcher'
import AppConstants from './constants/appConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'

let _catalog = []

for (let i = 0; i < 9; i++) {
  _catalog.push({
    'id': `Widget${i}`,
    'title': `Widget #${i}`,
    'summary': 'Hello item!',
    'description': 'It\'s a great item',
    'cost': i,
     'qty': 0
  })
}

let _cartItems = []

const _removeItem = (item) => {
  _cartItems.splice(_cartItems.findIndex(i => i === item), 1)
}
const sortCart = () => _cartItems.sort((a, b) => a > b ? 1 : -1)

const _findCartItem = (id) => _cartItems.find(item => item.id === id)

const _increaseItem = (item) => item.qty++
const _decreaseItem = (item) => {
  item.qty -= 1
  if(item.qty === 0)
   _removeItem(item)
}

const _addItem = (item) => {
  const itemInCart = _findCartItem(item)
    if(!itemInCart)
      _cartItems.push(Object.assign({'qty': 1}, item))
    else
      _increaseItem(itemInCart)
}

const _cartTotal = (qty = 0, total = 0) => {
  _cartItems.forEach((item) => {
    total = total + (item.qty * item.cost)
    qty = qty + item.qty
  })
  return {qty, total}
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange () {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener (callback) {
    this.remove(CHANGE_EVENT, callback)
  },
  getCart: function () {
    return _cartItems
  },
  getCatalog: function () {
    return _catalog.map((item) => {
      Object.assign({}, item, _cartItems.find(cartItem => cartItem.id === item.id))
    })
  },

  dispatcherIndex: register(function (action) {
    switch (action.actionType) {
      case AppConstants.ADD_ITEM:
          _addItem(action.item)
           break
      case AppConstants.REMOVE_ITEM:
          _removeItem(action.item)
          break
      case AppConstants.INCREASE_ITEM:
          _increaseItem(action.item)
          break
      case AppConstants.DECREASE_ITEM:
          _decreaseItem(action.item)
          break
      default:
          console.log('No action type found!')

    }
  })
})
