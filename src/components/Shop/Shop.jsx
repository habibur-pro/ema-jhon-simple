import React, { useState, useEffect } from 'react'
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart'
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb'
import { Link, useLoaderData } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const { totalProductCount } = useLoaderData()
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)


    const totalPages = Math.ceil(totalProductCount / itemsPerPage)

    // const pageNumbers = []
    // for (let i = 0; i < totalPages; i++) {
    //     pageNumbers.push(i)
    // }

    const pageNumbers = [...Array(totalPages).keys()]
    const perPageOptions = [5, 10, 20]
    const handleSelectChange = (event) => {
        setItemsPerPage(event.target.value)
        setCurrentPage(0)
    }




    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemsPerPage])


    useEffect(() => {
        const savedCart = []
        const storedCart = getShoppingCart()

        // step-1: get id 
        for (const id in storedCart) {
            // step-2: get products by using id
            const addedProduct = products.find(product => product._id === id)

            if (addedProduct) {
                //step-3: add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }



        }
        // step-5: set the cart 
        setCart(savedCart)
    }, [products])

    const handlerAdToCart = product => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)

    }

    const removeShoppingCartHandler = () => {
        setCart([])
        deleteShoppingCart()

    }

    return (
        <>
            <div className='shop-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product._id}
                            handlerAdToCart={handlerAdToCart}
                        ></Product>)
                    }
                </div>
                <div className='review-container'>
                    <Cart
                        cart={cart}
                        removeShoppingCartHandler={removeShoppingCartHandler}
                    >
                        <Link to='/order'>
                            <button className='btn-review'>
                                <span>Review Order</span>
                                <FontAwesomeIcon className='review-icon' icon={faArrowRight}></FontAwesomeIcon>
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>

            {/* pagination  */}
            <div className="pagination ">
                <p>Per page items: {itemsPerPage} and Current page is {currentPage}</p>
                {
                    pageNumbers.map(number => <button
                        key={number}
                        onClick={() => setCurrentPage(number)}
                        className={currentPage === number && 'selected'}
                    >{number}</button>)

                }

                {/* options  */}
                <select defaultValue={10} onChange={handleSelectChange} name="" id="">
                    {
                        perPageOptions.map((option) => <option
                            key={option}
                        >{option}</option>)
                    }
                </select>
            </div>

        </>
    )
}
export default Shop