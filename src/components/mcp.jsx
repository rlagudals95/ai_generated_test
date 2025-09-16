import React, { useState } from 'react';
import styled from '@emotion/styled';

const AppContainer = styled.div`
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
  width: 60px;
  height: 60px;
  font-size: 20px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      // Evaluate the expression safely
      // Note: Using eval is generally unsafe; consider using a library for production
      const result = eval(input); 
      setInput(String(result));
    } catch (error) {
      alert('Error in calculation. Please check your input.');
      console.error('Calculation error:', error);
    }
  };

  return (
    <CalculatorContainer>
      <Display type="text" value={input} readOnly />
      <ButtonContainer>
        <Button onClick={() => handleButtonClick('1')}>1</Button>
        <Button onClick={() => handleButtonClick('2')}>2</Button>
        <Button onClick={() => handleButtonClick('3')}>3</Button>
        <Button onClick={() => handleButtonClick('+')}>+</Button>
        <Button onClick={() => handleButtonClick('4')}>4</Button>
        <Button onClick={() => handleButtonClick('5')}>5</Button>
        <Button onClick={() => handleButtonClick('6')}>6</Button>
        <Button onClick={() => handleButtonClick('-')}>-</Button>
        <Button onClick={() => handleButtonClick('7')}>7</Button>
        <Button onClick={() => handleButtonClick('8')}>8</Button>
        <Button onClick={() => handleButtonClick('9')}>9</Button>
        <Button onClick={() => handleButtonClick('*')}>*</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={() => handleButtonClick('0')}>0</Button>
        <Button onClick={handleCalculate}>=</Button>
        <Button onClick={() => handleButtonClick('/')}>/</Button>
      </ButtonContainer>
    </CalculatorContainer>
  );
};

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Calculator</h1>
      <Calculator />
    </AppContainer>
  );
};

export default App;