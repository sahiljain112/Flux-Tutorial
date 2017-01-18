import React from 'react'
import Catalog from './catalogItems/catalog'
import Cart from './cartItems/cart'
import Template from './appTemplate'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

export default () => {
  return (
    <Router history= { browserHistory } >
      <Route path="/" component={ Template }>
        <IndexRoute component= { Catalog } />
        <Route path="cart" component={ Cart } />
      </Route>
    </Router>
  )
}
