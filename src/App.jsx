import React from "react";
import Latest from "./components/Latest";
import Rockets from "./components/Rockets";
import Company from "./components/Company";
import spacex from "./spacex";
import { useEffect, useState} from 'react';
import {
    Accordion,
  } from '@chakra-ui/react'

function App() {
    const [spacexData, setSpaceXData] = useState({ companyData: null, latestData: null, rocketsData: null });
    useEffect(() => {
        const fetchData = async () => {
            const company = await spacex.get(`/v4/company`);
            const latest = await spacex.get(`/v5/launches/latest`);
            const rockets = await spacex.get(`/v4/rockets`);
    
          setSpaceXData({ companyData: company.data, latestData: latest.data, rocketsData: rockets.data });
        };
    
        fetchData();
      }, []);
    if (spacexData.latestData) {
        console.log("latestData", spacexData.latestData);
    }
    if (spacexData.rocketsData) {
        console.log("rocketsData", spacexData.rocketsData);
    }
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            <Company title="SpaceX Company" company={spacexData.companyData}/>
            <Latest  title="Latest Mission" latest={spacexData.latestData}/>
            <Rockets title="Rocket" rocketsData={spacexData.rocketsData} latestData={spacexData.latestData}/>
        </Accordion>
    )
}

export default App;
