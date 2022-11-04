import React from "react";
import { useContext } from "react";
import { LatestContext } from '../contexts/Contexts';
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider
  } from '@chakra-ui/react'
import { format } from 'date-fns';

function Latest({title}) {
    const latest = useContext(LatestContext);
    if (!latest) {
        return
    }
    // crew list
    const crewList = latest.crew.map((obj, index) => {
        return <span key={index}> {obj.role}, </span>
    })
    const flightDate = format(new Date(latest.date_utc), 'MM/dd/yyyy HH:MM:SS');

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
                    Name: {latest.name}<Divider/>
                    Date: {flightDate}<Divider/>
                    Flight #: {latest.flight_number}<Divider/>
                    Crew: {crewList}<Divider/>
                    Details: {latest.details}<Divider/>
                    <a href={latest.links.wikipedia}>Wikipedia Link</a><Divider/>
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default Latest;