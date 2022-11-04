import React, {useState, useRef} from "react"

const SearchBar = ({title, searchTitle, onSearchBarChange}) => {
    const inputRef = useRef(null);
    const [term, setTerm] = useState('')
    const onInputChange  = (searchTerm) => {
        return (
            setTerm(searchTerm),
            onSearchBarChange(searchTerm)
        )
    }

    return (
        <>
            <div align="center">
                <h1>
                    {title}
                </h1>
                <h2>
                    {searchTitle}
                </h2>
                <div>
                    <input name="searchTerm" placeholder="Search Term" type="text" ref={inputRef}/>
                    <button onClick={() => {onInputChange(inputRef.current.value)}}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar;
