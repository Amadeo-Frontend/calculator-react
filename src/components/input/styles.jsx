import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px;

  input {
    font-size: 24px;
    width: 100%;
    height: 75px;
    padding: 0 16px;
    background-color: #666666;
    color: whitesmoke;
    border: none;
    direction: rtl;
  }
  input[value=''] {
    border-right: 2px solid whitesmoke; /* Cor e estilo da barra quando está vazio */
    height: 75%;
    margin-right: 8px;
    animation: ${blinkAnimation} 1s linear infinite;
  }
`;
