import { useEffect, useState } from "react";



function Products(){
    const [products, setProduct] = useState([]);


    useEffect(()=>{
        const fetchProduct = async()=>{
            try {
                const res = await fetch("https://dummyjson.com/products");
                if(!res.ok){
                    throw new Error('Product is not fetched');
                }

                const data = await res.json();
                setProduct(data.products);
            } catch (error) {
                console.log(error);
                
            } 
        }
        fetchProduct();
    },[])

    return(<>
        <ul>
            {products.map((product,index)=>(
                <li key={index}>{product.title}</li>
            ))}
        </ul>
    </>)
}


export default Products;