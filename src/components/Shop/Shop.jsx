import React,{useState,useEffect} from 'react'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'



const Shop = ()=>{
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() =>{
       const storedCart = getShoppingCart()
       console.log(storedCart)
    },[])

    const handlerAdToCart = product =>{
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
      
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