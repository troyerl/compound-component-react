import './Global.css'
import { createContext, useContext } from 'react';
import { Footer } from './Footer.jsx';

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

const Card = ({ children }) => {
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

Card.Header = ({ children }) => {
  const context = useCardContext();
  return (
    <div className="cardHeader">{children}</div>
  )
}

Card.Body = ({ children }) => {
  const context = useCardContext();
  return (
    <div className="cardBody">{children}</div>
  )
}

Card.Footer = Footer;

export default Card;