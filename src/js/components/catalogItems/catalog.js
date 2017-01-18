import React from 'react'
import AppStore from '../../stores/appStore'
import CatalogItem from './catalogItem'
import StoreComponent from '../../higherOrderComponents/storeComponent'

const getCatalog = () => {
  return { items: AppStore.getCatalog() }
}

const Catalog = (props) => {

    const items = props.items.map((item) => <CatalogItem key={item.id} item={item} />)
    return (
      <div className='catalog'>
        { items }
      </div>
   )
}

export default StoreComponent(Catalog, getCatalog)
