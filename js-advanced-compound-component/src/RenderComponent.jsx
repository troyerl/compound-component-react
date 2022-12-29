import { createContext, useContext } from 'react';

const RenderComponentContext = createContext({
  isWithinRenderComponent: false,
  status: 'Success'
})

const useRenderComponentContext = () => {
  const context = useContext(RenderComponentContext);
  if (!context.isWithinRenderComponent) {
    throw new Error(
      'Child components of Render Component cannot be rendered outside the Render Component!'
    );
  }

  return context;
}

const RenderComponent = ({ children, status, number }) => {
  console.log(`render component rendered ${number}, status: ${status}`)
  return (
    <RenderComponentContext.Provider
      value={{
        isWithinRenderComponent: true,
        status
      }}
    >
      {children}
    </RenderComponentContext.Provider>
  )
}

RenderComponent.SuccessContents = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== 'success') {
    return null;
  }

  return (
    <>{children}</>
  )
}

RenderComponent.LoadingContents = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== 'loading') {
    return null;
  }

  if (children) {
    return (
      <>{children}</>
    )
  }

  return (
    <h4>Default Loading...</h4>
  )
}

RenderComponent.ErrorContents = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== 'error') {
    return null;
  }

  return (
    <>{children}</>
  )
}

export default RenderComponent;