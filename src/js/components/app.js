import React from 'react'
import Catalog from './catalog'
import Cart from './cart'

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
