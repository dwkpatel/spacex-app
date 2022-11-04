import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'
import RocketData from "./RocketData";

function SearchResults({title, searchResults, count}) {
    if (!searchResults) {
        return
    }
    const rocketListItems = searchResults.map((obj, index) =>
        <RocketData key={index} value={obj} />
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
                    <h2>Search Result Count: {count}</h2>
                    {rocketListItems}
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default SearchResults;