import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { Job } from '../api/types/Job'

interface EditJobProps {
    job: Job
}

const EditJob = ({job} : EditJobProps) => {

const initialRef = useRef(null)
const [email, setEmail] = useState<string>('');
const [subject, setSubject] = useState<string>('');
const [body, setBody] = useState<string>('');
const [fireTime, setFireTime] = useState<Date>()

const result = Object.entries(job.jobData);

useEffect(() => {
    result.forEach((entry) => {
      if (entry[0] === 'email') {
        setEmail(typeof entry[1] === 'string' ? entry[1] : '');
      } else if (entry[0] === 'subject') {
        setSubject(typeof entry[1] === 'string' ? entry[1] : '');
      } else if (entry[0] === 'body') {
        setBody(typeof entry[1] === 'string' ? entry[1] : '');
      }
    });
    
  }, []);

console.log(result)

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello")
}

  return (
    <div>
         <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Receiver email</FormLabel>
            <Input disabled value={email} name='email' ref={initialRef} type='email' placeholder='Email' />
            <FormLabel>Subject</FormLabel>
            <Input disabled value={subject} name='subject' type='text' placeholder='Subject' />
            <FormLabel>Content</FormLabel>
            <Input disabled value={body} name='body' type='text' placeholder='Content' />
            <FormLabel>Please Provide New Trigger Date</FormLabel>
            <Input name='dateTime' type='datetime-local' placeholder='Content' />

            <Button style={{ marginTop: 10, float: 'left', display: 'flex' }} type='submit' colorScheme='whatsapp' mr={3}>Save</Button>
          </FormControl>
        </form>
    </div>
  )
}

export default EditJob