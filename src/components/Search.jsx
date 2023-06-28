import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { HiMagnifyingGlass } from 'react-icons/hi2';

const Search = () => {
    return (
        <div className='flex items-center mt-6 justify-center h-16 w-60 bg-neutral-100 rounded-lg cursor-pointer'>
            <div className=' flex items-center w-full justify-around px-2'>
                <HiMagnifyingGlass size="1.5em" color='gray'/>
                {/* <SearchIcon style={{ color: 'gray' }} /> */}
                {/* <input className='bg-neutral-100 focus:outline-0' placeholder='Search' /> */}
                <div className='text-gray-500 text-lg font-medium'>Search</div>
                <div className='border-2 p-1 px-4 rounded-lg border-gray-300 text-gray-500 text-lg font-medium'>Ctrl K</div>
            </div>
        </div>
    )
}

export default Search
