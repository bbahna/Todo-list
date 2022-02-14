import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import TodoHeader from './component/Header';
import TodoList from './component/List';

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
        <TodoList/>
      </Template>
    </>
  );
}

export default App;
