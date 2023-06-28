import React from 'react'

const List = ({ value, label,isSelected}) => {
    const active=isSelected? 'border-blue-500 appearance-none checked:bg-transparent':"";
    const combinedClassName = `border-2 border-gray-200 rounded flex  p-2 my-1 w-full hover:bg-gray-200 ${active}`;
    return (
        <option value={value} className={combinedClassName} >
            {label}
        </option>
    )
}

export default List
