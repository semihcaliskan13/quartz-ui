import { Button } from '@chakra-ui/react'
import React from 'react'

const ModalButton = () => {


 const handleClick = () => {
    alert("hello")
 }

  return (
    <div><Button onClick={handleClick} colorScheme='twitter'>x</Button></div>
  )
}

export default ModalButton