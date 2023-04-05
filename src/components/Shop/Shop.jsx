import React,{useState,useEffect} from 'react'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { addToDb, getShoppingCart } from '../../utilities/fakedb'



const Shop = ()=>{
    const [products,setProducts] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() =>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const savedCart = []
        const storedCart = getShoppingCart()

        // step-1: get id 
        for(const id in storedCart){
             // step-2: get products by using id
            const addedProduct = products.find(product => product.id === id)
            
          if(addedProduct){
             //step-3: add quantity
            const quantity = storedCart[id]
            addedProduct.quantity = quantity
            savedCart.push(addedProduct)
          }
         


        }
        // step-5: set the cart 
     setCart(savedCart)
    },[products])

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