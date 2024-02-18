import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import CustomModal from './CustomModal'
import ModalButton from './CustomModal'

const AddJob = () => {

  const initialRef = useRef(null)

  return (
    <>
      <CustomModal initialRef={initialRef}
        buttonText='Add Scheduled Job'
        buttonColorScheme='twitter'
        modalHeader='Add Scheduled Job' >
        <FormControl>
          <FormLabel>Receiver email</FormLabel>
          <Input ref={initialRef} type='email' placeholder='Email' />
          <FormLabel>Subject</FormLabel>
          <Input type='text' placeholder='Subject' />
          <FormLabel>Content</FormLabel>
          <Input type='text' placeholder='Content' />
          <FormLabel>When to send?</FormLabel>
          <Input type='date' placeholder='Content' />
          <FormLabel>Content</FormLabel>
          <Input type='text' placeholder='Content' />
        </FormControl>
      </CustomModal>
    </>
  )
}

export default AddJob