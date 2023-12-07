import React from 'react'

function ProductRow({category, price, inStock, name, id}) {
  return (
    <div>
        <p>{category}</p>
        <p>{price}</p>
        <p>{inStock}</p>
        <p>{name}</p>
        <p>{id}</p>
    </div>
  )
}

export default ProductRow