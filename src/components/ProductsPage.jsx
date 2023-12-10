import React from 'react'
import { useState } from 'react'
import jsonData from "/src/data.json";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [titleFilter, setTitleFilter] = useState('');
    const [onlyInStock, setOnlyInStock] = useState(false);
    //false because this is for the checkbox
  return (
    <div>
        <h1>IronStore</h1>
        <SearchBar titleFilter={titleFilter} setTitleFilter={setTitleFilter} onlyInStock={onlyInStock} setOnlyInStock={setOnlyInStock}/>
        <ProductTable products={products} titleFilter={titleFilter} onlyInStock={onlyInStock} />
    </div>
  )
}

export default ProductsPage

