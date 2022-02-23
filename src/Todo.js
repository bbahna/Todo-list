import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './component/Template';
import Header from './component/Header';
import List from './component/List';
import Create from './component/Create';
import { TodoProvider } from './Context';

const Todo = () => {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <Template>
          <Header />
          <List />
          <Create />
        </Template>
      </TodoProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

export default Todo;
