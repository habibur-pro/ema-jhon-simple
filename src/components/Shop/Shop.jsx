import React,{useState,useEffect} from 'react'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'



const Shop = ()=>{
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handlerAdToCart = product =>{
        const newCart = [...cart,product]
        setCart(newCart)
       console.log(cart)
    }

    return(
        <div className='shop-container'>
            <div className='product-container'>
               {
                products.map(product=><Product
                product = {product}
                key = {product.id}
                handlerAdToCart={handlerAdToCart}
                ></Product>)
               }
            </div>
            <div className='review-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
export default Shop