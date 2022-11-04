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

function Latest({title}) {
    const latest = useContext(LatestContext);
    if (!latest) {
        return
    }
    // crew list
    const crewList = latest.crew.map((obj, index) => {
        return <span key={index}> {obj.role}, </span>
    })

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
                    Date: {latest.date_utc}<Divider/>
                    Flight #: {latest.flight_number}<Divider/>
                    Crew: {crewList}<Divider/>
                    Details: {latest.details}<Divider/>
                    Link: <a href={latest.links.wikipedia}>Wikipedia</a><Divider/>
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default Latest;