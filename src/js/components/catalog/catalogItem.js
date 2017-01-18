import React from 'react'
import CartButton from '../cartItems/cartButton'
import Actions from '../../actions/appActions'

export default (props) => {
  return <div data-key={props.key}>
            <h4> {props.item.title} </h4>
            <img src='http://placehold.it/250x250' width='40%' />
            <p> {props.item.description} </p>
            <p> ${props.item.cost} {props.item.qty && `(${props.item.qty} in cart)`} </p>
            <br/>
            <CartButton txt = "Add!" handler = {Actions.addItem.bind(null, props.item)} />
         </div>
 }
