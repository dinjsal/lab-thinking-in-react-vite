import React from 'react'
import ProductRow from './ProductRow'
import { useState, useEffect } from 'react'

function ProductTable({products, titleFilter, onlyInStock}) {

    const [filteredProducts, setFilteredProducts] = useState([...products]);

    useEffect(() => {
        const newFilteredProducts = products.filter((product) => {
            return product.name
            // .toLowercase()
            .includes(titleFilter);
        });
        setFilteredProducts(newFilteredProducts);
    }, [titleFilter, products]);

    useEffect(() => {
        const newFilteredProducts = products.filter((product) => {
            if (onlyInStock) {
                return product.inStock;
            }
            else {
                return true;
            }
        });
        setFilteredProducts(newFilteredProducts);
    }, [onlyInStock, products])
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {filteredProducts.map((oneProduct) => {
            return (
                <ProductRow key={oneProduct.id} product={oneProduct}/>
                // <tr style={{color: !oneProduct.inStock && "red"}} key={oneProduct.id}> {oneProduct.name} </tr>
                )})}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable