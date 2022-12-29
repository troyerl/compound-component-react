import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react';

export enum Status {
    Success = 'Success',
    Loading = 'Loading',
    Error = 'Error'
}

interface RenderComponentProps {
  children?: ReactNode,
  status: Status,
}

const RenderComponentContext = createContext({
  isWithinRenderComponent: false,
  status: Status.Success
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

const RenderComponent = ({ children, status }: RenderComponentProps) => {
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

const SuccessContents: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== Status.Success) {
    return null;
  }

  return (
    <>{children}</>
  )
}

const LoadingContents: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== Status.Loading) {
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

const ErrorContents: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useRenderComponentContext();

  if (status !== Status.Error) {
    return null;
  }

  return (
    <>{children}</>
  )
}

RenderComponent.SuccessContents = SuccessContents;
RenderComponent.LoadingContents = LoadingContents;
RenderComponent.ErrorContents = ErrorContents;

export default RenderComponent;