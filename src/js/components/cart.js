import React from 'React'
import Actions from '../actions/appActions'
import CartItem from './cartItem'
import AppStore from '../stores/appStore'

const getCartItems = () => AppStore.getCart()

export default class Cart extends React.Component {
  constructor() {
    super()
    this.state = { cartItems: getCartItems() }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    AppStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      cartItems: getCartItems()
    })
  }

  render () {
    let total = 0
    const cartItems = this.state.cartItems.map((item, i) => {
      let subtotal = item.cost * item.qty
      total = subtotal + total
      return <CartItem key= {i} item = {item} />
    })
    return (
      <div>
      <h1> Cart </h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th></th>
            <th> Item </th>
            <th> Quantity </th>
            <th></th>
            <th> Price </th>
          </tr>
        </thead>
        <tbody>
            { cartItems }
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4" className="text-right"> Total</td>
            <td> ${total} </td>
          </tr>
        </tfoot>
      </table>
      </div>
    )
  }
}
