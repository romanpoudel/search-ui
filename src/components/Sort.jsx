import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../features/search/searchSlice';

const Sort = () => {
    // const [selectedCategory, setSelectedCategory] = useState("");
    // const [selectedPrice, setSelectedPrice] = useState("");
    const [dropdown, setDropdown] = useState({ category: "", price: "" })

    // const select = useSelector((state) => state.search.categories);
    // const {category,price}=select;
    // console.log(category)
    const dispatch = useDispatch();

    const handleCategory = (e) => {
        setDropdown({...dropdown,category:e.target.value})
        dispatch(setCategory(dropdown))
    }
    const handlePrice = (e) => {
        setDropdown({...dropdown,price:e.target.value})
        dispatch(setCategory(dropdown))
    }
    return (
        <div className='flex space-x-1'>
            <div >
                <select
                    className='border-2 rounded border-blue-400 focus:outline-none'
                    value={dropdown.category}
                    onChange={handleCategory}
                >
                    <option value="">Category</option>
                    <option value="men">Men's clothing</option>
                    <option value="women">Women's clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewellery">Jewellery</option>
                </select>
            </div>
            <div>
                <select
                    className='border-2 rounded border-blue-400 focus:outline-none'
                    value={dropdown.price}
                    onChange={handlePrice}
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
