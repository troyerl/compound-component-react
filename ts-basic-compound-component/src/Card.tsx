import './Global.css'
import { createContext, FC, PropsWithChildren, ReactNode, useContext } from 'react';
import { Footer } from './Footer.jsx';

interface CardProps {
  children?: ReactNode;
}

const CardContext = createContext({
  isWithInCard: false,
});

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context.isWithInCard) {
    throw new Error(
      'Child components of Card cannot be rendered outside the Card component!'
    );
  }

  return context;
};

const Card = ({ children }: CardProps) => {
  return (
    <CardContext.Provider
      value={{
        isWithInCard: true,
      }}
    >
      <div className="card">{children}</div>
    </CardContext.Provider>
  )
}

const Header: FC<PropsWithChildren> = ({ children }) => {
  const context = useCardContext();
  return (
    <div className="cardHeader">{children}</div>
  )
}

const Body: FC<PropsWithChildren> = ({ children }) => {
  const context = useCardContext();
  return (
    <div className="cardBody">{children}</div>
  )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;