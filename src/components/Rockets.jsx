import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider
  } from '@chakra-ui/react'

function Rockets({title, rocketsData, latestData}) {
    if (!rocketsData) {
        return
    }

    // Rocket Images
    const rocketImages = rocketsData[0].flickr_images;
    const images = rocketImages.map((img, index) => {
        return <img src={img} alt={index}></img>
    })

    // Find the rocket from latest data model using guid
    const rocketFound = rocketsData.find(obj => {
        return obj.id === latestData.rocket;
    });
    const rocketName = rocketFound.name;
    const rocketDescription = rocketFound.description;
    const rocketCostPerLaunch = rocketFound.cost_per_launch;
    const rocketFirstFlight = rocketFound.first_flight;
    const rocketHeight = rocketFound.height.feet;
    const rocketWeight = rocketFound.mass.lb;
    

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
                    Name: {rocketName}<Divider/>
                    Description: {rocketDescription}<Divider/>
                    Cost Per Launch: USD {rocketCostPerLaunch}<Divider/>
                    First Flight: {rocketFirstFlight}<Divider/>
                    Height: {rocketHeight} feet<Divider/>
                    Weight: {rocketWeight} lbs<Divider/>
                    {images}
                </AccordionPanel>
            </AccordionItem>
        </>
    )
}

export default Rockets;