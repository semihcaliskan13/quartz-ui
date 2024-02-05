import { Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import './jobs-table.css'
import mockJobs from '../mock/JobTypeMock'
import Job from './Job'
import ModalButton from './ModalButton'

const JobsTable = () => {

    const mockJobData  = mockJobs;
    return (
        <div>

            <Center className='jobsTable'>
                <Table verticalAlign={'center'} width={'50%'} variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Job Name</Th>
                            <Th>Job Group</Th>
                            <Th>Job Datas</Th>
                            <Th>Job Triggers</Th>
                            <Th>Edit</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {mockJobData.map((job,index) => (
                            <Tr key={index}>
                            <Td>
                                {job.jobName}
                            </Td>
                            <Td>
                                {job.jobGroup}
                            </Td>
                            <Td>
                               <ModalButton/>
                            </Td>
                            <Td>
                                <Button colorScheme='facebook'>job</Button>
                            </Td>
                            <Td>
                                <Button colorScheme='orange'>edit</Button>
                            </Td>
                            <Td>
                                <Button colorScheme='red'>delete</Button>
                            </Td>
        
                        </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>To convert</Th>
                            <Th>into</Th>
                            <Th isNumeric>multiply by</Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </Center>

        </div>
    )
}

export default JobsTable