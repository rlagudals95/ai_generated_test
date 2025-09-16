import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const CalculatorContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Display = styled.input`
  width: 100%;
  height: 40px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
`;

const Button = styled.button`
  width: 23%;
  height: 40px;
  margin: 1%;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression safely
      const result = eval(input); // Note: eval can be dangerous; consider using a safer alternative in production
      setInput(result.toString());
    } catch (error) {
      alert('Error in calculation: ' + error.message);
      setInput('');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <Container>
      <CalculatorContainer>
        <Display type="text" value={input} readOnly />
        <div>
          <Button onClick={() => handleButtonClick('1')}>1</Button>
          <Button onClick={() => handleButtonClick('2')}>2</Button>
          <Button onClick={() => handleButtonClick('3')}>3</Button>
          <Button onClick={() => handleButtonClick('+')}>+</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick('4')}>4</Button>
          <Button onClick={() => handleButtonClick('5')}>5</Button>
          <Button onClick={() => handleButtonClick('6')}>6</Button>
          <Button onClick={() => handleButtonClick('-')}>-</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick('7')}>7</Button>
          <Button onClick={() => handleButtonClick('8')}>8</Button>
          <Button onClick={() => handleButtonClick('9')}>9</Button>
          <Button onClick={() => handleButtonClick('*')}>*</Button>
        </div>
        <div>
          <Button onClick={handleClear}>C</Button>
          <Button onClick={() => handleButtonClick('0')}>0</Button>
          <Button onClick={handleCalculate}>=</Button>
          <Button onClick={() => handleButtonClick('/')}>/</Button>
        </div>
      </CalculatorContainer>
    </Container>
  );
};

export default App;