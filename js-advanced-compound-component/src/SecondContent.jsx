import RenderComponent from './RenderComponent.jsx';
import { UserInfo } from './UserInfo';

export const SecondContent = ({ status, data }) => {
  console.log('second content render')
  return (
    <RenderComponent status={status} number={2}>
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