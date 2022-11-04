import React from "react";
import {
    Divider
  } from '@chakra-ui/react'

function LaunchData(launch) {
    if (!launch) { 
        return
    }

    return  <div>
                <span>Flight Name: <b>{launch.value.name}</b></span><Divider/>
                <span>Flight Date: {launch.value.date_utc}</span><Divider/>
                <span>Flight Number: {launch.value.flight_number}</span><Divider/>
            </div>;
}

export default LaunchData;
