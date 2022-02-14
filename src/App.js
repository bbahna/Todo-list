import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Template>Hellow</Template>
    </>
  );
}

export default App;
