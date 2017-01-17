import React from 'react'
import AppStore from '../stores/appStore'
import CatalogItem from './catalogItem'

const getCatalog = () => AppStore.getCatalog()

export default class Catalog extends React.Component {
  constructor () {
    super()
    this.state = {
      items: getCatalog()
    }
  }
  render () {
    //console.log('State is', AppStore.getCatalog())
    const items = this.state.items.map((item) => <CatalogItem key={item.id} item={item} />)
    return(
      <div className='catalog'>
        { items }
      </div>
   )
  }
}
