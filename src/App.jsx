import { useEffect, useState } from 'react';
import Button from './components/button';
import { BackButton, DivideButton } from './components/button/styles';
import Input from './components/input';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('');
  const [previousNumber, setPreviousNumber] = useState('');
  const [operation, setOperation] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key;
      if (!isNaN(key) || key === ',' || key === '.') {
        // Se a tecla for um número, vírgula ou ponto, adicione ao número atual
        handleAddNumber(key);
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        // Se a tecla for um operador, defina a operação
        handleSetOperation(key);
      } else if (key === 'Enter' || key === '=') {
        // Se a tecla for Enter ou igual, realize o cálculo
        handleCalculate();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleRemoveLastDigit = () => {
    if (currentNumber.length > 0) {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  };

  const handleClear = () => {
    setCurrentNumber('');
    setPreviousNumber('');
    setOperation('');
  };
  const maxDigits = 12;
  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => {
      if (prev.length >= maxDigits) {
        return prev;
      }
      if (prev === '0' || prev === '-0') {
        return number;
      } else if (prev === '' && number === ',') {
        return '0.';
      } else if (prev === '' && number === '00') {
        return '0';
      } else {
        return `${prev}${number}`;
      }
    });
  };

  const handleSetOperation = (operator) => {
    setPreviousNumber(currentNumber);
    setCurrentNumber('');
    setOperation(operator);
  };

  const handlePercentage = () => {
    const prevNum = parseFloat(previousNumber);
    const percent = prevNum / 100;
    setCurrentNumber(percent.toString().replace('.', ','));
    setPreviousNumber('');
    setOperation('');
  };

  const handleCalculate = () => {
    let prevNum = parseFloat(previousNumber);
    let currentNum = parseFloat(currentNumber);

    if (isNaN(prevNum) || isNaN(currentNum)) {
      setCurrentNumber('Erro');
      setPreviousNumber('');
      setOperation('');
    } else {
      let result = 0;
      switch (operation) {
        case '+':
          result = prevNum + currentNum;
          break;
        case '-':
          result = prevNum - currentNum;
          break;
        case 'x':
          result = prevNum * currentNum;
          break;
        case '/':
          if (currentNum === 0) {
            setCurrentNumber('Erro');
            setPreviousNumber('');
            setOperation('');
            return;
          }
          result = prevNum / currentNum;
          break;
        default:
          result = currentNum;
      }
      setCurrentNumber(result.toString().replace('.', ','));
      setPreviousNumber('');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input
          value={currentNumber}
          className={currentNumber === '' ? 'isEmpty' : ''}
        />
        <Row>
          <Button label="C" onClick={handleClear} />
          <BackButton label="" onClick={handleRemoveLastDigit} />
          <DivideButton label="/" onClick={() => handleSetOperation('/')} />
          <Button label="%" onClick={handlePercentage} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="x" onClick={() => handleSetOperation('x')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="-" onClick={() => handleSetOperation('-')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="+" onClick={() => handleSetOperation('+')} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="00" onClick={() => handleAddNumber('00')} />
          <Button label="," onClick={() => handleAddNumber(',')} />
          <Button label="=" onClick={handleCalculate} />{' '}
        </Row>
      </Content>
    </Container>
  );
};

export default App;
