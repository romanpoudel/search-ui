import React from 'react'
import { BiUpArrowAlt, BiDownArrowAlt } from 'react-icons/bi';
import { AiOutlineEnter } from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
            <div className='flex items-center justify-start text-xs text-gray-400 font-medium'>
                <div className='flex mr-3'>
                    <div className='bg-neutral-100 rounded shadow  object-center h-4 w-5 flex items-center justify-center mr-1 border'>
                        <BiUpArrowAlt color='gray' />
                    </div>
                    <div className='bg-neutral-100 rounded shadow object-center h-4 w-5 flex items-center justify-center mr-1 border'>
                        <BiDownArrowAlt color='gray' />
                    </div>
                    <p>to navigate</p>
                </div>
                <div className='flex items-center mr-3'>
                    <div className='bg-neutral-100 rounded shadow object-center h-4 w-5 flex items-center justify-center mr-1 border'>
                        <AiOutlineEnter color='gray' />
                    </div>
                    <p>
                        to select
                    </p>

                </div>
                <div className='flex'><span className='text-gray-400 border bg-neutral-100 rounded shadow px-1 mr-1'>esc</span><p>to close</p></div>
            </div>
        </div>
    )
}

export default Footer
