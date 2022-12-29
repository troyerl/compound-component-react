import { useEffect, useState } from 'react';

export const useMockApiCall = () => {
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
    }, 5000)
  }, []);

  return { status, data }
}