import { Button, Center, IconButton, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import './jobs-table.css'
import ModalButton from './AddJob'
import CustomModal from './CustomModal'
import JobTriggers from './JobTriggers'
import JobDatas from './JobDatas'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { Job } from '../api/types/Job'
import { JobService } from '../api/services/JobService'
import EditJob from './EditJob'

const JobsTable = () => {


    const [allJobs, setAllJobs] = useState<Job[]>();


    const fetchAllJobs = async () => {
        try {
            const response = await JobService.getAllJobs();
            setAllJobs(response);
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
       fetchAllJobs();
    }, [])
    

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
                        {allJobs?.map((job, index) => (
                            <Tr key={index}>
                                <Td>
                                    {job.jobName}
                                </Td>
                                <Td>
                                    {job.jobGroup}
                                </Td>
                                <Td>
                                <CustomModal
                                        buttonColorScheme='pink'
                                        buttonText='See Job Datas'
                                        modalHeader='Job Datas'
                                    >
                                    <JobDatas jobDatas={job.jobData}/>

                                    </CustomModal>
                                </Td>
                                <Td>
                                    <CustomModal
                                        buttonColorScheme='facebook'
                                        buttonText='See Job Triggers'
                                        modalHeader='Job Triggers'
                                        modalSize='xl'
                                    >
                                    <JobTriggers jobTriggers={job.triggersOfJob}/>

                                    </CustomModal>
                                </Td>
                                <Td>                           
                                <CustomModal
                                        buttonText='Edit Job'
                                        modalHeader='Edit Job'
                                        modalSize='xl'
                                        modalButton={<EditIcon/>}
                                        modalType='edit'
                                 > 
                                    <EditJob job={job}/>
                                </CustomModal>                   
                                </Td>
                                <Td>
                                <IconButton
                                icon={<DeleteIcon />}
                                colorScheme='red'
                                aria-label='Delete'
                               />    
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