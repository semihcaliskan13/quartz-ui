import { Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import './jobs-table.css'
import mockJobs from '../mock/JobTypeMock'
import Job from './Job'
import ModalButton from './AddJob'
import CustomModal from './CustomModal'
import JobTriggers from './JobTriggers'
import JobDatas from './JobDatas'

const JobsTable = () => {

    const mockJobData = mockJobs;
    return (
        <div>

            <Center className='jobsTable'>
                <Table verticalAlign={'center'} width={'50%'} variant='striped' colorScheme='teal'>
                    <TableCaption placement='top' >Scheduled Jobs</TableCaption>
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
                        {mockJobData.map((job, index) => (
                            <Tr key={index}>
                                <Td>
                                    {job.jobName}
                                </Td>
                                <Td>
                                    {job.jobGroup}
                                </Td>
                                <Td>
                                    <Button colorScheme='facebook'>See Job Datas</Button>
                                </Td>
                                <Td>
                                    <CustomModal
                                        buttonColorScheme='facebook'
                                        buttonText='See Job Triggers'
                                        modalHeader='Job Triggers'
                                    >
                                    <JobTriggers jobTriggers={job.triggersOfJob}/>

                                    </CustomModal>
                                </Td>
                                <Td>
                                <CustomModal
                                        buttonColorScheme='pink'
                                        buttonText='See Job Datas'
                                        modalHeader='Job Datas'
                                    >
                                    <JobDatas jobDatas={job.jobDataMap}/>

                                    </CustomModal>
                                </Td>
                                <Td>
                                    <Button colorScheme='red'>delete</Button>
                                </Td>

                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                    </Tfoot>
                </Table>
            </Center>

        </div>
    )
}

export default JobsTable