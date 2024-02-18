import { List, ListItem } from '@chakra-ui/react';
import React from 'react';

interface JobDatasProps {
  jobDatas: any;
}

const JobDatasComponent = ({ jobDatas }: JobDatasProps) => {
  const result = Object.entries(jobDatas);

  return (
    <div >
      {result.map((entry, index) => (
        <div className='job-datas' key={index}>
          <p>{entry[0]}</p>
          {typeof entry[1] === 'string' || typeof entry[1] === 'number' ? (
            <p>{entry[1]}</p>
          ) : (
            <pre>{JSON.stringify(entry[1], null, 2)}</pre>
          )}
        </div>
      ))}
    </div>
  );
};

export default JobDatasComponent;
