import React from 'react'
import ProductRow from './ProductRow'
import { useState } from 'react'
import jsonData from "/src/data.json";

function ProductTable() {
    const [data, setData] = useState(jsonData);
  return (
    <div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            {data.map((oneData) => {
                    return (<tbody>
                        <tr key={jsonData.id}>
                            <td><ProductRow name={oneData.name}/></td>
                            {oneData.inStock ? oneData.name = blue : oneData.name = red} 
                            {/* {oneData.inStock ? oneData.name.style={color:black} : oneData.name.style={color:red}}  */}
                            <td><ProductRow price={oneData.price}/></td>
                        </tr>
                    </tbody>)
                })}
        </table>
    </div>
  )
}

export default ProductTable