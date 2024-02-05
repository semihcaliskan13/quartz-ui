import React from 'react';
import './App.css';
import {
    Button,
    Box,
    Flex,
    Spacer,
    Image, Center, Text,
    Avatar, AvatarBadge, AvatarGroup, Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react";
import { ColorModeToggler } from "./theme/color-mode-toggler";
import { Link, useNavigate } from "react-router-dom";
import JobsTable from './components/JobsTable';
import Job from './components/Job';
import { JobType } from './api/types/Job';

function App() {

    const JobObject: JobType = {
        jobName: "my job",
        jobGroup: "",
        jobDataMap: {},
        triggersOfJob: {
            cronTime: "",
            group: "",
            fireTime: new Date,
            name: "hello"
        }
    }

    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                padding="1.5rem"
                color="white"
                position="fixed"
                top="0"
                width="100%"
                zIndex="1000" w='100%' p={4} >
                <Center w='100px'>
                    <Image src={require('./assets/drive.png')} boxSize='100px'
                        objectFit='cover' borderRadius='full' alt='Dan Abramov' />
                </Center>

                <Center flex={1}>
                    <Text>home</Text>
                </Center>
                <Center flex={1}>
                    <Text>home</Text>
                </Center>
                <Center flex={1}>
                    <Text>home</Text>
                </Center>

                <Spacer />
                <Center>
                    <Menu>
                        <MenuButton>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to="/your-route">
                                    Your Menu Item
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={() => alert("hello")}>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Center>

            </Flex>
            <Box mt={200}>
                <ColorModeToggler />
                <Button colorScheme='purple'>hello chakra</Button>
                
                <Job job={JobObject}/>
            </Box>
            <JobsTable/>



        </div>
    );
}

export default App;
