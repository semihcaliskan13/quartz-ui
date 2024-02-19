import { TriggersOfJob } from "./JobTriggers"

export type Job = {
    jobName: string,
    jobGroup: string,
    jobData: {},
    triggersOfJob: TriggersOfJob[]
}