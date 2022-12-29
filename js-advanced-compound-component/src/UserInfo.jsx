export const UserInfo = ({ data }) => {
  return (
    <div>
      <h3>Name: {data.name}</h3>
      <h3>Address: {data.address}</h3>
      <h3>Phone: {data.phone}</h3>
    </div>
  );
};