import { InputContainer } from './styles';

// eslint-disable-next-line react/prop-types
const Input = ({ value }) => {
  return (
    <InputContainer>
      <input disabled value={value} />
    </InputContainer>
  );
};

export default Input;
