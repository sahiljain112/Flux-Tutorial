import React from 'react'
import CartButton from './CartButton'
import Actions from '../actions/appActions'

export default (props) => {
  return <div data-key={props.key}>
            <h4> {props.item.title} </h4>
            <img src='http://placehold.it/250x250' width='40%' />
            <p> {props.item.description} </p>
            <p> ${props.item.cost} </p>
            <br/>
            <CartButton txt = "Add To Cart" handler = {Actions.addItem.bind(null, props.item.id)} />
         </div>
       }
