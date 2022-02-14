import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import TodoHeader from './component/Header';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <TodoHeader/>
      </Template>
    </>
  );
}

export default App;
