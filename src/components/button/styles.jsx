import styled from 'styled-components';

export const ButtonCalculator = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: #e0e0e0;
  border-radius: 50%;
  box-shadow: 2px 2px 4px #b7b7b7, -2px -2px 4px #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 2px 2px 8px #b7b7b7, -2px -2px 8px #ffffff;
  }
`;
// Exemplo de botão com o ícone de dividir
export const DivideButton = styled(ButtonCalculator)`
  &::before {
    content: '\u00F7'; /* Conteúdo do ícone */
  }
`;

// Exemplo de botão com o ícone de voltar
export const BackButton = styled(ButtonCalculator)`
  &::before {
    content: '\u2421'; /* Conteúdo do ícone */
  }
`;
