import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { MutableRefObject, ReactNode, useRef } from 'react'

interface ModalButtonProps {
    buttonText: string,
    buttonColorScheme: string,
    children: ReactNode,
    modalHeader?: string,
    initialRef?: MutableRefObject<null>
}

const CustomModal = ({buttonText, buttonColorScheme, children, modalHeader, initialRef} : ModalButtonProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    

    return (
        <>
            <Button colorScheme={buttonColorScheme} onClick={onOpen}>{buttonText}</Button>

            <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{modalHeader}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomModal