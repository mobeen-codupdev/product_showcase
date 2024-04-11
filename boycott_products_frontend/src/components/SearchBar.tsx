import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../src/hooks'
import { productSelector } from '../pages/SearchResults/selector'
import { getProduct, initProducts } from '../pages/SearchResults/action'
import { SearchProductParams } from '../pages/SearchResults/type'

const SearchBar = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const products = useAppSelector(productSelector)
    const [inputValue, setInputValue] = useState<string>('')
    const [clickedOutside, setClickedOutside] = useState(false)
    const targetRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                targetRef.current &&
                !targetRef.current.contains(event.target)
            ) {
                setClickedOutside(true)
            } else {
                setClickedOutside(false)
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])
    const debounce = <T extends unknown[]>(
        func: (...args: T) => void,
        delay: number,
    ) => {
        let timeoutId: NodeJS.Timeout
        return function (...args: T) {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => func.apply(this, args), delay)
        }
    }
    const handleInputChange = (value: string) => {
        const params: SearchProductParams = { page: 1, limit: 5, term: value }
        dispatch(getProduct(params))
    }
    const debouncedHandleInputChange = debounce(handleInputChange, 500)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setInputValue(value)
        debouncedHandleInputChange(value)
    }
    return (
        <div className="flex justify-center mt-12">
            <div className="relative w-full max-w-4xl h-18 bg-[#f9f9f9] rounded-3xl shadow-xl">
                <div className="flex items-center pl-4 py-2.5 h-full">
                    <img
                        className="w-10 h-10 stroke-[#B5B5B5]"
                        src="/search.svg"
                        alt="Search"
                    />
                    <input
                        type="text"
                        placeholder="Search category or brand"
                        className="ml-4 bg-transparent w-full h-full outline-none text-xl text-gray-600 placeholder-[#B5B5B5]"
                        value={inputValue}
                        onChange={handleChange}
                        disabled={products.loading}
                    />
                </div>
                {products && products.data.length > 0 && !clickedOutside && (
                    <div
                        ref={targetRef}
                        className="absolute mt-4 flex flex-col items-center justify-start bg-white text-xl text-[#888888] rounded-3xl shadow-[0px_4px_8px_rgba(0,_0,_0,_0.25)] w-full cursor-pointer py-6 space-y-4"
                    >
                        {products.data.map((d, idx) => (
                            <div
                                key={idx}
                                className="text-gray border-b border-[#888888] w-full px-4"
                                onClick={() => {
                                    setClickedOutside(true)
                                    dispatch(initProducts())
                                    navigate(`/search-results/${d._id}`)
                                }}
                            >
                                {d.productName}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchBar
