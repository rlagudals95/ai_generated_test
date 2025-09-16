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
  padding: 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setError('');
    if (value === '=') {
      try {
        // Evaluate the expression
        const result = eval(input);
        setInput(String(result));
      } catch (e) {
        setError('Invalid expression');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <CalculatorContainer>
      <Display type="text" value={input} readOnly />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div>
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
      </div>
      <div>
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
      </div>
      <div>
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
      </div>
      <div>
        {['0', '.', '=', '+', 'C'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
      </div>
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