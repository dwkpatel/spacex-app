import React from "react";
import {
    Divider
  } from '@chakra-ui/react'

function ImageItem(props) {
    return  <img src={props.value} alt={props.value}></img>;
}
function RocketData(rocket) {
    if (!rocket) { 
        return
    }
    // get rocket images
    const rocketImages = rocket.value.flickr_images; 
    const images = rocketImages.map((img, index) =>
        <ImageItem key={index} value={img} />
    );

    return  <div>
                <span>Name: <b>{rocket.value.name}</b></span><Divider/>
                <span>Description: {rocket.value.description}</span><Divider/>
                <span>Cost per Launch: {rocket.value.cost_per_launch}</span><Divider/>
                <span>First Flight: {rocket.value.first_flight}</span><Divider/>
                <span>Rocket Height: {rocket.value.height.feet}</span><Divider/>
                <span>Rocket Weight: {rocket.value.mass.lb}</span><Divider/>
                <span>{images}</span>
            </div>;
}

export default RocketData;
