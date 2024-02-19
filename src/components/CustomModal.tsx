import { EditIcon } from '@chakra-ui/icons'
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, useDisclosure, IconButton } from '@chakra-ui/react'
import React, { MutableRefObject, ReactElement, ReactNode, useRef } from 'react'

interface ModalButtonProps {
    buttonText?: string,
    buttonColorScheme?: string,
    children: ReactNode,
    modalHeader?: string,
    initialRef?: MutableRefObject<null>,
    modalSize?: string,
    modalType?: string,
    modalButton?: ReactElement
}

const CustomModal = ({ buttonText, buttonColorScheme, children, modalHeader, initialRef, modalSize, modalType, modalButton }: ModalButtonProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            {modalType === 'edit' ?
                <IconButton
                    onClick={onOpen}
                    icon={modalButton}
                    colorScheme='orange'
                    aria-label='Edit'
                /> :
                <Button colorScheme={buttonColorScheme} onClick={onOpen}>{buttonText}</Button>}

            <Modal size={modalSize === null ? 'md' : modalSize} isOpen={isOpen} onClose={onClose} initialFocusRef={initialRef}>
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