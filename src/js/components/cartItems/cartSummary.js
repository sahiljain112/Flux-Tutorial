import StoreComponent from '../../higherOrderComponents/StoreComponent'
import AppStore from '../../stores/appStore'
import React from 'react'
import { Link } from 'react-router'

const CartSummary = (props) => {
  return (
    <div className = "container">
      <Link to='/cart' className="button">
         { `Cart Items: ${props.qty} / $${props.total}` }
      </Link>
    </div>
  )
}

export default StoreComponent(CartSummary, AppStore.getCartTotal())
