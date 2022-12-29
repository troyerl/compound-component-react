import { useEffect, useState } from 'react';
import { Status } from './RenderComponent';

export interface DataProps {
  name: string;
  address: string;
  phone: string;
}

export const useMockApiCall = () => {
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
    }, 5000)
  }, []);

  return { status, data }
}