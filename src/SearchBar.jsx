import { HStack } from "@chakra-ui/react"
import React, {useState, useRef} from "react"

const SearchBar = ({onSearchBarChange}) => {
    // const {setSearchValue} = useContext(SearchContext);
    const inputRef = useRef(null);
    const [term, setTerm] = useState('')
    const onInputChange  = (searchTerm) => {
        return (
            setTerm(searchTerm),
            onSearchBarChange(searchTerm)
        )
    }

    return (
        <HStack>
            <h2>Search SpaceX</h2>
            <input name="searchTerm" placeholder="Search Term" type="text" ref={inputRef}/>
            <button onClick={() => {onInputChange(inputRef.current.value)}}>Submit</button>
        </HStack>
    )
}

export default SearchBar;
