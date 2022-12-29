import { useCardContext } from './Card.jsx';

export const Footer = ({ children }) => {
  const context = useCardContext();
  return (
    <div>{children}</div>
  )
}