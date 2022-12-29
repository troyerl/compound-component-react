import { useEffect, useState } from 'react';
import { Status } from './RenderComponent';
import { DataProps } from './useMockApiCall';

export const useSecondMockApiCall = () => {
  const [status, setStatus] = useState<Status>(Status.Loading);
  const [data, setData] = useState<DataProps | undefined>(undefined);

  useEffect(() => {
    setTimeout(() => {
      setStatus(Status.Success)
      setData({
        name: 'Logan',
        address: '1 Hacker Way, Menlo Park, CA 94025',
        phone: '123-456-7890'
      })
    }, 10000)
  }, []);

  return { status, data }
}