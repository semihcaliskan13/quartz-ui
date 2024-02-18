import { List, ListItem, Table } from '@chakra-ui/react'
import React from 'react'
import { JobTriggers } from '../api/types/JobTriggers'

interface JobTriggersProps{
    jobTriggers: JobTriggers 
}

const JobTriggersComponent = ({jobTriggers} : JobTriggersProps) => {
    return (
        <List spacing={3}>
                <ListItem>{jobTriggers.cronTime} </ListItem>
                <ListItem>{jobTriggers.group}</ListItem>
                <ListItem>{jobTriggers.name}</ListItem>
                <ListItem>{jobTriggers.cronTime}</ListItem>
            </List>
    )
}

export default JobTriggersComponent