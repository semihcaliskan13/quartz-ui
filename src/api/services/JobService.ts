import { AddTrigger } from "../types/AddTrigger";
import { CreateJob } from "../types/CreateJob";
import { Job } from "../types/Job";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const JobService = {

    saveJob: async (job: CreateJob): Promise<CreateJob> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(job)
            });
        return await response.json();
    },
    
    getAllJobs: async () : Promise<Job[]> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs`, 
        {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        });

        return await response.json();
    }, 

    getJobById: async (groupName: string, jobId: string) : Promise<Job[]> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs/groups/${groupName}/jobs/${jobId}`, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        });
        return await response.json();
    },

    addTriggersToExistingJob: async(addTriggerRequest: AddTrigger) : Promise<void> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs/triggers`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            }
        });

        return await response.json();
    },

    pauseJob: async (groupName: string, jobId: string) : Promise<void> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs/groups/${groupName}/jobs/${jobId}/pause` , {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        });

        return await response.json();
    },

    resumeJob: async (groupName: string, jobId: string) : Promise<void> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs/groups/${groupName}/jobs/${jobId}/resume` , {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        });

        return await response.json();
    },

    deleteJob: async (groupName: string, jobId: string) : Promise<void> => {
        const response = await fetch(`${BASE_URL}/schedule-jobs/groups/${groupName}/jobs/${jobId}` , {
            method: 'DELETE',
            headers: {
                accept: 'application/json'
            }
        });

        return await response.json();
    }






}