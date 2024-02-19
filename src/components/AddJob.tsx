import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { error } from 'console'
import React, { FormEvent, FormEventHandler, useRef } from 'react'
import { JobService } from '../api/services/JobService'
import { CreateJob } from '../api/types/CreateJob'
import CustomModal from './CustomModal'
import ModalButton from './CustomModal'

const AddJob = () => {

  const initialRef = useRef(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let addJobForm: CreateJob = Object.fromEntries(formData.entries());
    addJobForm.timeZone = "Europe/Istanbul";
    await JobService.saveJob(addJobForm).then(response => {
      console.log(response)
    }

    ).catch(error => {
      console.log(error)
    });
  }

  return (
    <>
      <CustomModal initialRef={initialRef}
        buttonText='Add Scheduled Job'
        buttonColorScheme='twitter'
        modalHeader='Add Scheduled Job' >
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Receiver email</FormLabel>
            <Input name='email' ref={initialRef} type='email' placeholder='Email' />
            <FormLabel>Subject</FormLabel>
            <Input name='subject' type='text' placeholder='Subject' />
            <FormLabel>Content</FormLabel>
            <Input name='body' type='text' placeholder='Content' />
            <FormLabel>When to send?</FormLabel>
            <Input name='dateTime' type='datetime-local' placeholder='Content' />

            <Button style={{ marginTop: 10, float: 'left', display: 'flex' }} type='submit' colorScheme='whatsapp' mr={3}>Save</Button>
          </FormControl>
        </form>
      </CustomModal>
    </>
  )
}

export default AddJob