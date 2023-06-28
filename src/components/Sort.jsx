import React, { useState,useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories} from '../features/search/searchSlice';

const Sort = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPrice, setSelectedPrice] = useState("");

    // useEffect(() => {
    //     dispatch(fetchCategories())
    // }, [dispatch])
    // const categories = useSelector((state) => state.search.categories)
    // console.log(categories)
    return (
        <div className='flex space-x-1'>
            <div >
                <select
                    className='border-2 rounded border-blue-400 focus:outline-none'
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                >
                    <option value="">Category</option>
                    <option value="men's clothing">Men's clothing</option>
                    <option value="women's clothing">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewellery">Jewellery</option>
                </select>
                {/* <Category /> */}
            </div>
            <div>
                <select
                    className='border-2 rounded border-blue-400 focus:outline-none'
                    value={selectedPrice}
                    onChange={e => setSelectedPrice(e.target.value)}
                >
                    <option value="" >Price</option>
                    <option value="20">less then $20</option>
                    <option value="50">less then $50</option>
                    <option value="100">less then $100</option>
                    <option value="200">less then $200</option>
                </select>
            </div>


        </div>
    )
}

export default Sort
