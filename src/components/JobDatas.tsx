import { List, ListItem } from '@chakra-ui/react';
import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";


interface JobDatasProps {
  jobDatas: any | undefined;
}

const JobDatasComponent = ({ jobDatas }: JobDatasProps) => {
  console.log(jobDatas)
  const result = Object.entries(jobDatas);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Keys</Th>
          <Th>Values</Th>
        </Tr>
      </Thead>
      <Tbody>
        {result.map((entry, index) => (
          <Tr key={index}>
            <Td><strong>{entry[0]}</strong></Td>
            <Td>
              {typeof entry[1] === "string" || typeof entry[1] === "number" ? (
                entry[1]
              ) : (
                <pre>{JSON.stringify(entry[1], null, 2)}</pre>
              )}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default JobDatasComponent;
