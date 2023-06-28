import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { TbListDetails } from 'react-icons/tb';
import { useSelector, useDispatch } from "react-redux";
import { setTypedValue } from "../features/search/searchSlice";
import Sort from './Sort';

const Input = () => {
    const [search, setSearch] = useState("");
    const [showCategory, setShowCategory] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(setTypedValue(search))
    }
    const handleCategory = (e) => {
        setShowCategory(true)
    }
    // const search1 = useSelector((c) => c.search.value);
    // console.log("search1:",search1)
    const handleClear = () => {
        setSearch((prev) => prev.substring(0, prev.length - 1))
    }
    return (
        <div>
            <div className='border-2 border-blue-400 rounded flex items-center justify-between p-2 mb-6'>
                <div className='flex w-5/6'>
                    <div className='mx-2 '>
                        <HiMagnifyingGlass size="1.5em" color='black' />
                    </div>
                    <div className='w-full'>
                        <input type="text" className='placeholder:text-gray-300 font-medium mx-2 focus:outline-0 ' placeholder='Search' value={search} onChange={handleChange} />
                    </div>

                </div>
                <div className='flex items-center w-1/6'>
                    <div className='mx-2 relative' onClick={handleCategory}>
                        <TbListDetails size="1.5em" />
                        <div className='absolute top-0 -left-56'>
                            {showCategory && <Sort />}
                            
                        </div>

                    </div>
                    <div className='mr-2' onClick={handleClear}>
                        <BackspaceOutlinedIcon color='disabled' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Input
