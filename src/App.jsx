import React from "react";
import { useEffect, useState } from 'react';
import { BrowserRouter} from "react-router-dom";
import { ChakraProvider, Accordion, theme } from '@chakra-ui/react'
import { MultipleContext } from './contexts/Contexts';
import { LatestContext } from './contexts/Contexts';
import loadable from '@loadable/component';
import SearchBar from "./components/SearchBar";
import spacex from "./api/spacex";

/*  To avoid large bundles, Code Splitting / loadable components are used as an efficient way to reduce the bundle size.
    It speeds up the loading of your application and reduces the payload size of your application. Also read React.lazy
*/
const Company = loadable(() => import('./components/Company'));
const Latest = loadable(() => import('./components/Latest'));
const Rockets = loadable(() => import('./components/Rockets'));
const Upcoming = loadable(() => import('./components/Upcoming'));

function App() {
    // Declare a new state variable spacexData with null values for the state values.
    const [spacexData, setSpaceXData] = useState({ companyData: null, latestData: null, rocketsData: null, rocketsDataSearch: null, upcoming: null });

    /* useEffect Hook: A side effect is any execution that affects something outside the scope of the function being executed.
        It’s a general concept about the behavior of a function. For example, if a function modifies a global variable, 
        then that function is introducing a side effect — the global variable doesn’t belong to the scope of the current function.
        callback argument is a function that puts the side-effect logic based on dependencies (props or state values).
    */

    useEffect(() => {
        // callback
        const fetchData = async () => {
            const company = await spacex.get(`/v4/company`);
            const latest = await spacex.get(`/v5/launches/latest`);
            const rockets = await spacex.get(`/v4/rockets`, { 'query': { 'name': 'falcon'} });
            const upcoming = await spacex.post(`/v5/launches/query`, {
                'query': { 'upcoming': true }, 
                "options" : {
                    "limit": 30,
                    "sort":{
                        "date_utc":"asc"
                    }
                }
             });
            
            // update state to store component state, props values
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
    if (spacexData.upcoming) {
        console.log("upcoming", spacexData.upcoming);
    }

    /* Contexts are used to post stateful data to nested components without having to use props
        Object below is used to post multiple contexts. 
    */
    var multipleContextData = {
        latestData: spacexData.latestData,
        rocketsData: spacexData.rocketsData,
        upcoming: spacexData.upcoming
    };

    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Accordion defaultIndex={[0]} allowToggle>
                    <SearchBar title="SpaceX Company" searchTitle="Search SpaceX"/>

                    <Company title="Company Information" company={spacexData.companyData}/>

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

                </Accordion>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;
