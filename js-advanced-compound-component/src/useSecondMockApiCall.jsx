import { useEffect, useState } from 'react';

export const useSecondMockApiCall = () => {
  const [status, setStatus] = useState('loading');
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      setStatus('success')
      setData({
        name: 'Logan',
        address: '1 Hacker Way, Menlo Park, CA 94025',
        phone: '123-456-7890'
      })
    }, 10000)
  }, []);

  return { status, data }
};