/* eslint-disable no-unused-vars */
import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'

// Images import
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img7 from '../../assets/product/p-7.jpg'
import Img8 from '../../assets/product/p-8.jpg'
import Img9 from '../../assets/product/p-9.jpg'

const ProductData = [

    {
        id: 1,
        img: Img1,
        title: "Ceat Headphones",
        price: "$995.00",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Yapple Watch 400",
        price: "$360.00",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Rocky Mountain",
        price: "$8250.00",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Goren Spectacles",
        price: "$520.00",
        aosDelay: "600",
    },
]
const ProductData2 = [

    {
        id: 1,                                                                                  
        img: Img5,
        title: "Adacus Headphones",
        price: "$995.00",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img9,
        title: "Sore Wear C6",
        price: "$459.99",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img7,
        title: "Metal 4000",
        price: "$825.00",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img8,
        title: "Mac N Cheese book",
        price: "$1200.00",
        aosDelay: "600",
    },
]
const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header Section  */}
            <Heading 
            title="Our Products" 
            subtitle="Explore our collection of products"
            />
            {/* Body Section  */}
            <ProductCard data={ProductData}/>
            <ProductCard data={ProductData2}/>
        </div>
    </div>
  )
}

export default Products