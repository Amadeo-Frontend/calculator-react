import { ButtonCalculator } from './styles';

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return <ButtonCalculator onClick={onClick}>{label}</ButtonCalculator>;
};

export default Button;
