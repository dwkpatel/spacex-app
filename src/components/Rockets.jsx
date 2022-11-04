import React from "react";
import { useContext } from "react";
import { MultipleContext } from '../contexts/Contexts';
import RocketData from "./RocketData";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

function Rockets({title}) {
    const multipleContext = useContext(MultipleContext);
    const rocketsData = multipleContext.rocketsData;
    const latestData = multipleContext.latestData;
    if (!rocketsData || !latestData) {
        return
    }

    // Find the rocket from latest data model using guid
    const rocketFound = rocketsData.find(obj => {
        return obj.id === latestData.rocket;
    });
    // Latest rocket data
    const rocketDetails = <RocketData value={rocketFound} />
    
    // Searched rocket data
    const rocketListItems = rocketsData.map((rocket, index) =>
        <RocketData key={index} value={rocket} />
    );

    return (
        <>
            <AccordionItem>
                <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box flex='1' textAlign='center'>
                        {title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg='teal'>
                    {rocketDetails}
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem pb={4}>
                <h2>
                    <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                        <Box flex='1' textAlign='center'>
                        All Rockets
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg='teal'>
                    {rocketListItems}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export default Rockets;