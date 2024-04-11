import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import { GET_PRODUCTS_ENDPOINT } from '../../config/endpoints'
import { useParams } from 'react-router-dom'
import { Product } from './type'

const SearchResults = () => {
    const { id: productId } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    useEffect(() => {
        if (!productId) return
        fetch(`${GET_PRODUCTS_ENDPOINT}/${productId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((res) => setProduct(res.data))
            .catch((err) => console.log('Something went wrong', err))
    }, [])
    console.log(product)
    return (
        <div className="w-full h-screen relative text-left text-black font-outfit">
            {/* Background Layer */}
            <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-10 z-0" />

            {/* Content */}
            <div className="relative z-10">
                {/* Navbar */}
                <Navbar />

                {/* Search bar */}
                <SearchBar />

                {/* Search Results */}
                <div className="w-full px-8 md:px-24 flex flex-col items-center justify-center space-y-12 mt-12">
                    <div className="w-full flex flex-col md:flex-row md:gap-4 items-center justify-start">
                        <img
                            className="w-[314px] h-[235px] object-cover"
                            alt=""
                            src="/coke.png"
                        />
                        <div className="flex-grow flex items-center">
                            <div className="rounded-2xl w-[200px] md:w-fit bg-[#ffe6e6] shadow-[0px_4px_12px_rgba(0,_0,_0,_0.25)] overflow-hidden flex items-center justify-start py-2.5 px-4 gap-4 md:ml-10">
                                <img
                                    className="w-10 h-10"
                                    src="/cross.svg"
                                    alt=""
                                />
                                <div className="uppercase font-semibold text-md md:text-2xl">
                                    <span>Do </span>
                                    <span className="text-red-500">Not</span>
                                    <span> buy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pb-8">
                        {product && product.description && (
                            <>
                                <h1 className="text-red-500 uppercase font-semibold text-center text-4xl">
                                    why?
                                </h1>

                                <p className="w-full max-w-[1001px] text-md md:text-xl text-center">
                                    {product.description}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
