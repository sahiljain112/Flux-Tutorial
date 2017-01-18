import React from 'react'
import Catalog from './catalogItems/catalog'
import Cart from './cartItems/cart'

export default class App extends React.Component {
  render () {
    return (
      <div className='content'>
        <Catalog />
        <Cart />
      </div>
    )
  }
}
