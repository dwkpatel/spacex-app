import React from "react";
import { format } from 'date-fns'

import {
    Divider
  } from '@chakra-ui/react'

function LaunchData(launch) {
    if (!launch) { 
        return
    }
    const flightDate = format(new Date(launch.value.date_utc), 'MM/dd/yyyy HH:MM:SS');

    return  <div>
                <span>Flight Name: <b>{launch.value.name}</b></span><Divider/>
                <span>Flight Date: {flightDate}</span><Divider/>
                <span>Flight Number: {launch.value.flight_number}</span><Divider/>
            </div>;
}

export default LaunchData;
