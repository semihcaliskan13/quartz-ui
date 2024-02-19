import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import React from 'react';
import { TriggersOfJob } from '../api/types/JobTriggers';

interface JobTriggersProps {
  jobTriggers: TriggersOfJob[];
}

    const JobTriggersComponent = ({ jobTriggers }: JobTriggersProps) => {
    console.log(jobTriggers);

  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Cron Time</Th>
          <Th>Group</Th>
          <Th>Name</Th>
        </Tr>
      </Thead>
      <Tbody>
        {jobTriggers.map((value: TriggersOfJob, index: number) => (
          <Tr key={index}>
            <Td>{value.cronTime}</Td>
            <Td>{value.group}</Td>
            <Td>{value.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default JobTriggersComponent;
