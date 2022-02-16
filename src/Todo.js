import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import Header from './component/Header';
import List from './component/List';

function Todo() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Header/>
        <List/>
      </Template>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default Todo;
