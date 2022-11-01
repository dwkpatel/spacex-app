import React from "react";
import { useContext } from "react";
import { MultipleContext } from '../contexts/Contexts';
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
            </ul>;
}

function RocketDetails(props) {
    return  <div>
                <span>Name: <b>{props.value.name}</b></span><Divider/>
                <span>Description: {props.value.description}</span><Divider/>
                <span>Cost per Launch: {props.value.cost_per_launch}</span><Divider/>
                <span>First Flight: {props.value.first_flight}</span><Divider/>
                <span>Rocket Height: {props.value.height.feet}</span><Divider/>
                <span>Rocket Weight: {props.value.mass.lb}</span>
            </div>;
}

function Rockets({title}) {
    const multipleContext = useContext(MultipleContext);
    const rocketsData = multipleContext.rocketsData;
    const latestData = multipleContext.latestData;
    if (!rocketsData || !latestData) {
        return
    }

    // Rocket Images
    const rocketImages = rocketsData[0].flickr_images;
    const images = rocketImages.map((img, index) =>
        <ImageItem key={index} value={img} />
    );

    // Find the rocket from latest data model using guid
    const rocketFound = rocketsData.find(obj => {
        return obj.id === latestData.rocket;
    });
    // Latest rocket data
    const rocketDetails = <RocketDetails value={rocketFound} />
    
    // Searched rocket data
    const rocketListItems = rocketsData.map((rocket, index) =>
        <RocketListItem key={index} value={rocket} />
    );

    return (
        <>
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
                    {rocketDetails}
                    {images}
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem pb={4}>
                <h2>All Rockets</h2>
                {rocketListItems}
            </AccordionItem>
        </>
    )
}

export default Rockets;