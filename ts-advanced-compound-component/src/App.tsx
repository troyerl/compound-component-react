import './Global.css';
import RenderComponent from './RenderComponent';
import { useMockApiCall } from './useMockApiCall';
import { UserInfo } from './UserInfo';
import { SecondContent } from './SecondContent';
import { useSecondMockApiCall } from './useSecondMockApiCall';

function App() {
  const { status, data } = useMockApiCall();
  const { status: secondStatus, data: secondData } = useSecondMockApiCall();

  return (
    <div className="App">
      <RenderComponent status={status}>
        <h2>Render Component Title</h2>
        <RenderComponent.SuccessContents>
          <UserInfo data={data}/>
          <hr/>
          <SecondContent status={secondStatus} data={secondData}/>
        </RenderComponent.SuccessContents>

        <RenderComponent.LoadingContents>
          <h4>Loading...</h4>
        </RenderComponent.LoadingContents>

        <RenderComponent.ErrorContents>
          <h4>Error!</h4>
        </RenderComponent.ErrorContents>
      </RenderComponent>
    </div>
  )
}

export default App
