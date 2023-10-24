import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #15161b;
  color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  max-width: 280px;
  padding: 10px;
  width: 50%;
  background-color: #2d2d37;
  border-radius: 16px;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px 0;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
