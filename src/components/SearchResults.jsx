import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider
  } from '@chakra-ui/react'

function ImageItem(props) {
    return  <img src={props.value} alt={props.value}></img>;
}

function RocketListItem(props) {
    // Rocket Images
    const rocketImages = props.value.flickr_images;
    const images = rocketImages.map((img, index) =>
        <ImageItem key={index} value={img} />
    );
    return  <ul>
                <li>{props.value.name}</li>
                <span>{props.value.description}</span>
                <span>{images}</span>
                <span><RocketDetails value={props.value} /></span>
                <hr/>
            </ul>;
}
function RocketDetails(props) {
    const rocketName = props.value.name;
    const rocketDescription = props.value.description;
    const rocketCostPerLaunch = props.value.cost_per_launch;
    const rocketFirstFlight = props.value.first_flight;
    const rocketHeight = props.value.height.feet;
    const rocketWeight = props.value.mass.lb;
    return  <div>
                <span>Name: <b>{rocketName}</b></span><Divider/>
                <span>Description: {rocketDescription}</span><Divider/>
                <span>Cost per Launch: {rocketCostPerLaunch}</span><Divider/>
                <span>First Flight: {rocketFirstFlight}</span><Divider/>
                <span>Rocket Height: {rocketHeight}</span><Divider/>
                <span>Rocket Weight: {rocketWeight}</span>
            </div>;
}

function SearchResults({title, searchResults}) {
    if (!searchResults) {
        return
    }
    const rocketListItems = searchResults.map((obj, index) =>
        <RocketListItem key={index} value={obj} />
    );

    return (
        <>
            <AccordionItem>
                <h2>
                    {title}
                </h2>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                        {title}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    {rocketListItems}
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default SearchResults;