import RenderComponent, { Status } from './RenderComponent.jsx';
import { UserInfo } from './UserInfo';
import { DataProps } from './useMockApiCall';

interface SecondContentProps {
  status: Status,
  data?: DataProps
}

export const SecondContent = ({ status, data }: SecondContentProps) => {
  return (
    <RenderComponent status={status}>
      <RenderComponent.SuccessContents>
        <UserInfo data={data}/>
      </RenderComponent.SuccessContents>
      <RenderComponent.LoadingContents>
        <h4>Loading Inner Content...</h4>
      </RenderComponent.LoadingContents>
      <RenderComponent.ErrorContents>
        <h4>Inner Error!</h4>
      </RenderComponent.ErrorContents>
    </RenderComponent>
  );
};