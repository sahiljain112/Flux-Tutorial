import React from 'React'
import CartButton from './cartButton'
import Actions from '../actions/appActions'

export default (props) => {
  let subtotal = props.item.qty * props.item.cost
  return (
    <tr key={props.key} className = 'cartItem'>
      <td> <CartButton txt="x" handler={ Actions.removeItem.bind(null, props.item)}/> </td>
      <td> { props.item.title} </td>
      <td> {props.item.qty} </td>
      <td>
        <div className='btn-group'>
          <CartButton txt='+' handler={ Actions.increaseItem.bind(null, props.item)} />
          <CartButton txt='-' handler={ Actions.decreaseItem.bind(null, props.item)} />
        </div>
      </td>
      <td> { subtotal }</td>
    </tr>
  )
}
