import React from "react";
import Latest from "./components/Latest";
import Rockets from "./components/Rockets";
import Company from "./components/Company";
import SearchBar from "./SearchBar";
import SearchResults from "./components/SearchResults";
import Upcoming from "./components/Upcoming";
import spacex from "./spacex";
import { useEffect, useState } from 'react';
import { Accordion } from '@chakra-ui/react'
import { MultipleContext } from './contexts/Contexts';
import { LatestContext } from './contexts/Contexts';

function App() {
    const [spacexData, setSpaceXData] = useState({ companyData: null, latestData: null, rocketsData: null, rocketsDataSearch: null, upcoming: null });

    useEffect(() => {
        getSearchResults('')
    }, [])
    const getSearchResults = async term => {
        const response = await spacex.get(`/v4/rockets`, { 'query': { 'name': term} });
        setSpaceXData({ rocketsDataSearch: response.data });
    }
    
    useEffect(() => {
        // callback
        const fetchData = async () => {
            const company = await spacex.get(`/v4/company`);
            const latest = await spacex.get(`/v5/launches/latest`);
            const rockets = await spacex.get(`/v4/rockets`, { 'query': { 'name': 'falcon 1'} });
            const upcoming = await spacex.post(`/v5/launches/query`, { 'query': { 'upcoming': true } });
            
            // update state
            setSpaceXData({ companyData: company.data, latestData: latest.data, rocketsData: rockets.data, upcoming: upcoming.data.docs });
        };
    
        fetchData();
      }, []);
    if (spacexData.latestData) {
        console.log("latestData", spacexData.latestData);
    }
    if (spacexData.rocketsData) {
        console.log("rocketsData", spacexData.rocketsData);
    }
    if (spacexData.rocketsDataSearch) {
        console.log("rocketsDataSearch", spacexData.rocketsDataSearch);
    }
    if (spacexData.upcoming) {
        console.log("upcoming", spacexData.upcoming);
    }

    // Object used to post multiple contexts
    var multipleContextData = {
        latestData: spacexData.latestData,
        rocketsData: spacexData.rocketsData,
        upcoming: spacexData.upcoming
    };
  
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <SearchBar onSearchBarChange={getSearchResults} searchResults={spacexData.rocketsDataSearch}/>

            <Company title="SpaceX Company" company={spacexData.companyData}/>

            {/* to post multiple contexts, create an object and wrap the components within this provider */}
            <MultipleContext.Provider value={multipleContextData}>
                <Upcoming title="Upcoming Launches"/>
            </MultipleContext.Provider>

            {/* to post individual context, wrap the component directly within this provider */}
            <LatestContext.Provider value={spacexData.latestData}>
                <Latest title="Latest Mission"/>
            </LatestContext.Provider>

            {/* to post multiple contexts, create an object and wrap the components within this provider */}
            <MultipleContext.Provider value={multipleContextData}>
                <Rockets title="Latest Mission Rocket"/>
            </MultipleContext.Provider>

            <SearchResults title="Search Results" searchResults={spacexData.rocketsDataSearch}/>

        </Accordion>
    )
}

export default App;
