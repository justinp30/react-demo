import React, { useState, useEffect } from "react"

const Products = () => 
const [products, setProducts] = useState([]);

useEffect(() => {
const fetchProducts = async () => {
const response = await fetch("https://dummyjson.com/products");
const data = await response.json();
console.log(data);
setProducts (data. products) ;
};
fetchProducts();
}, []);

console.log(products);

return (
    <div>Here are the products</div
{products.map( (product) =>{
return  <h1>{product.title}</h1>;
})}
</div>
);

export default Products;