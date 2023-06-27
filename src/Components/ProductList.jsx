import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({list, handleDelete , handleEdit}) => {
  return (
    <div>
      <div className='product-list'>
          {
              React.Children.toArray(list.map(product=><ProductCard product={product} handleDelete={handleDelete} handleEdit={handleEdit}/>))
          }   
      </div>
    </div>

  )
}

export default ProductList