import React from 'React'
import Actions from '../../actions/appActions'
import CartItem from './cartItem'
import AppStore from '../../stores/appStore'
import StoreComponent from '../../higherOrderComponents/storeComponent'

const getCartItems = () => { return { cartItems: AppStore.getCart()} }

const Cart = ( props ) => {

    let total = 0
    console.log(props)
    const cartItems = props.cartItems.map((item, i) => {
      let subtotal = item.cost * item.qty
      total = subtotal + total
      return <CartItem key= {i} item = {item} />
    })
    console.log('Hello')
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

export default StoreComponent(Cart, getCartItems)
