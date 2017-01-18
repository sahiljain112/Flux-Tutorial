import React from 'react'
export default (props) => {
  return (
    <div className='container'>
      <button type='button' onClick={props.handler} >
        { props.txt }
      </button>
    </div>
  )
}
