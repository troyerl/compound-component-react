import { DataProps } from './useMockApiCall';

interface UserInfoProps {
  data?: DataProps;
}
export const UserInfo = ({ data }: UserInfoProps) => {
    return (
      <div>
          <h3>Name: {data?.name}</h3>
          <h3>Address: {data?.address}</h3>
          <h3>Phone: {data?.phone}</h3>
      </div>
    );
};