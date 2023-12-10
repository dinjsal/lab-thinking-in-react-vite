import React from 'react'

function ProductRow({product}) {
  return (
    <tr key={product.id}>
      {/* 3 ways to style names of products not inStock */}
      <td style={{color: product.inStock ? "black" : "red"}}>{product.name}</td>
      {/* <td style={{color: !product.inStock && "red"}}>{product.name}</td> */}
      {/* <td style={{color: product.inStock === false && "red"}}>{product.name}</td> */}
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow