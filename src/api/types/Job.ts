import { JobTriggers } from "./JobTriggers"

export type JobType = {
    jobName: string,
    jobGroup: string,
    jobDataMap: {},
    triggersOfJob: JobTriggers
}