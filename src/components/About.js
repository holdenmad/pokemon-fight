import React from 'react'
import { AddCircle, Html5, Css3, Reactjs, Node, Linkedin, Github } from 'grommet-icons';

import { Anchor, Box, Header, Nav, Image, Text, Button } from 'grommet';


const About = () => {
    return (
        <Box align='center' justify="center">
            <Text margin="medium">This project was part of the <Anchor>WBS Coding School</Anchor>, and had the following objectives:
            <ul>
                <li>Create a full-stack application</li>
                <li>Utilize APIs</li>
                <li>Use a React UI library for design</li>
                <li>Utilize a database</li>
            </ul>
            My own personal goals were the following:
            <ul>
                <li>Create an enjoyable interface for the user</li>
                <li>Make it as accessible as I can</li>
                <li>Utilize text-to-speech technology (for fun and accessibility)</li>
                <li>Make something fun to play</li>
            </ul>
            </Text>
            <Box flex direction="row">
                <Box margin="small">
                    <Text weight='bold' margin='small'>Technologies Used:</Text>
                    <Box flex direction="row" justify='center'>
                        <Html5 color="#E44D26" size='xlarge'/>
                        <Css3 color="#2565AE" size='xlarge'/>
                        <Reactjs color="#61DBFB" size='xlarge'/>
                        <Node color="#3C873A" size='xlarge'/>
                    </Box>
                </Box>
                <Box margin="small">
                <Text>Libraries/APIs used:</Text>
                    <Anchor href="https://pokeapi.co/">PokeAPI</Anchor>
                    <Anchor href="https://grommet.io/">Grommet UI Library</Anchor>
                </Box>
                <Box margin="small">
                    <Text weight="bold" margin="small">Where to find me:</Text>
                    <Box flex direction="row" justify='center'>
                        <Anchor href="https://github.com/holdenmad/"><Github color="black" size='xlarge'/></Anchor>
                        <Anchor href="https://www.linkedin.com/in/holdenmad/"><Linkedin color="#006192" size='xlarge'/></Anchor>
                    </Box>
                </Box>
            </Box>
            
            
        </Box>
    )
}

export default About
