import React from "react";
import { useContext } from "react";
import RocketData from "./RocketData";
import LaunchData from "./LaunchData";
import { MultipleContext } from '../contexts/Contexts';
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

function Upcoming({title}) {
    const multipleContext = useContext(MultipleContext);
    const rocketsData = multipleContext.rocketsData;
    const upcoming = multipleContext.upcoming;

    if (!upcoming) {
        return
    }

    // Match the rocket id from upcoming data with the Rocket data and return upcoming rocket launches.
    const upcomingLaunchData = upcoming.filter(({ rocket: id1 }) =>
        rocketsData.some(({ id: id2 }) => id2 === id1)
    );
    const upcomingLaunches = upcomingLaunchData.map((obj, index) => 
        <LaunchData key={index} value={obj} />
    );

    const upcomingLaunchRocketData = rocketsData.filter(({ id: id1 }) =>
        upcoming.some(({ rocket: id2 }) => id2 === id1)
    );

    const upcomingLaunchRockets = upcomingLaunchRocketData.map((obj, index) => 
        <RocketData key={index} value={obj} />
    );

    return (
        <>
            <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box flex='1' textAlign='center'>
                        {title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                <AccordionPanel pb={4} bg='teal'>
                    {upcomingLaunches}
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box flex='1' textAlign='center'>
                        Upcoming Launch Rockets
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg='teal'>
                    {upcomingLaunchRockets}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export default Upcoming;