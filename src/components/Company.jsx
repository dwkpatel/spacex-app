import React from "react";
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider
  } from '@chakra-ui/react'

function Company({title, company}) {
    if (!company) {
        return
    }
    // const crewList = company.crew.map((obj, index) => {
    //     return <div key={index}>{obj.role}</div>
    // })
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
                        Company Information
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <a href={company.links.flickr} target="_blank" rel="noreferrer">Official SpaceX Photos</a><Divider/>
                    Address: {company.headquarters.address}, {company.headquarters.city}, {company.headquarters.state}<Divider/>
                    Founder: {company.founder}<Divider/>
                    Founded: {company.founded}<Divider/>
                    Vehicles: {company.vehicles}<Divider/>
                    Launch Sites: {company.launch_sites}<Divider/>
                    Summary: {company.summary} 
                </AccordionPanel>
            </AccordionItem>

        </>
    )
}

export default Company;