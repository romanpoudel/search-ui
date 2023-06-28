import React, { useState, useRef, useEffect } from 'react';
import List from './List';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/search/searchSlice';

const Options = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const search = useSelector((state) => state.search.value)
    const contents = useSelector((state) => state.search.contents)
    const isLoading = useSelector((state) => state.search.isLoading)
    const error = useSelector((state) => state.search.error)

    if (isLoading) {
        console.log("loading")
    }

    if (error) {
        console.log(error)
    }
    // const options = [
    //     { value: 'option1', label: '# Export icon set as icon package' },
    //     { value: 'option2', label: '# Export icon set as icon package' },
    //     { value: 'option3', label: '# Export icon set as icon package' },
    //     { value: 'option4', label: '# Export icon set as icon package' },
    //     { value: 'option5', label: '# Export icon set as icon package' },
    //     { value: 'option6', label: '# Export icon set as icon package' },
    //     { value: 'option7', label: '# Export icon set as icon package' },
    //     { value: 'option8', label: '# Export icon set as icon package' },
    //     { value: 'option9', label: '# Export icon set as icon package' },
    //     { value: 'option62', label: '# Export icon set as icon package' },
    //     { value: 'option10', label: '# Export icon set as icon package' },
    //     { value: 'option51', label: '# Export icon set as icon package' },
    // ];
    const selectRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : contents.length - 1));


            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex < contents.length - 1 ? prevIndex + 1 : 0));

            }
        };

        const selectElement = selectRef.current;
        if (selectElement) {
            selectElement.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            if (selectElement) {
                selectElement.removeEventListener('keydown', handleKeyDown);
            }
        };
    }, []);

    const handleSelectChange = (event) => {
        setSelectedIndex(event.target.selectedIndex);
    };

    return (
        <div>
            <div>
                <select
                    className='focus:outline-none w-full'
                    size="6"
                    multiple={false}
                    name="option"
                    ref={selectRef}
                    onChange={handleSelectChange}
                    value={contents?.[selectedIndex]?.title || ""} // Select the option based on the selectedIndex
                >
                    {contents.filter((option) => {
                        return search.toLowerCase() === '' ? option : option.title.toLowerCase().includes(search)
                    }).map((option, index) => (
                        <List key={option.id} value={option.title} label={option.title} isSelected={index === selectedIndex} />
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Options;
