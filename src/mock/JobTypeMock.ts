import { JobType } from "../api/types/Job";
import { JobTriggers } from "../api/types/JobTriggers";

const mockJobTriggers1: JobTriggers = {
    name: "Trigger1",
    group: "Group1",
    fireTime: new Date("2022-03-01T10:30:00"),
    cronTime: "0 30 10 * * ?",
  };
  
  const mockJobTriggers2: JobTriggers = {
    name: "Trigger2",
    group: "Group2",
    fireTime: new Date("2022-03-02T15:45:00"),
    cronTime: "0 45 15 * * ?",
  };
  
  const mockJobTriggers3: JobTriggers = {
    name: "Trigger3",
    group: "Group1",
    fireTime: new Date("2022-03-03T20:00:00"),
    cronTime: "0 0 20 * * ?",
  };
  
  const mockJob1: JobType = {
    jobName: "Job1",
    jobGroup: "JobGroup1",
    jobDataMap: {
      "name" : "email"
    },
    triggersOfJob: mockJobTriggers1,
  };
  
  const mockJob2: JobType = {
    jobName: "Job2",
    jobGroup: "JobGroup2",
    jobDataMap: {},
    triggersOfJob: mockJobTriggers2,
  };
  
  const mockJob3: JobType = {
    jobName: "Job3",
    jobGroup: "JobGroup1",
    jobDataMap: {},
    triggersOfJob: mockJobTriggers3,
  };
  
  export const mockJobs: JobType[] = [mockJob1, mockJob2, mockJob3];
  
  export default mockJobs;
  