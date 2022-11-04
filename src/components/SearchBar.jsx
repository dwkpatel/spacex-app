import React, {useState, useRef, useEffect} from "react"
import spacex from "../api/spacex";
import loadable from '@loadable/component';
import { Routes, Route } from "react-router-dom";
const SearchResults = loadable(() => import('./SearchResults'));

const SearchBar = ({title, searchTitle}) => {
    const searchResultCount = useRef(0);
    const inputRef = useRef(null);
    const [term, setTerm] = useState('')

    useEffect(() => {
        getSearchResults('')
    }, [])

    const [spacexData, setSpaceXData] = useState({ rocketsDataSearch: null });
    const getSearchResults = async term => {
        if (term !== '') {
            const response = await spacex.get(`/v4/rockets`, { 'query': { 'name': term} });
            // update state to store component state, props values
            searchResultCount.current = response.data.length;
            setSpaceXData({ rocketsDataSearch: response.data }); 
        }
    }
    const onInputChange  = (searchTerm) => {
        return (
            setTerm(searchTerm),
            getSearchResults(searchTerm)
        )
    }
    if (spacexData.rocketsDataSearch) {
        console.log("rocketsDataSearch", spacexData.rocketsDataSearch);
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
                {term !== ''?
                <Routes>
                    <Route path="/" exact element={<SearchResults title="Search Results" searchResults={spacexData.rocketsDataSearch} count={searchResultCount.current} />}/>
                </Routes> : <></>
                }    
            </div>
        </>
    )
}

export default SearchBar;
