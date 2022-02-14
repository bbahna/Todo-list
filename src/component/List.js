import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
`;

function TodoList() {
  return <List>목록들</List>;
}

export default TodoList;
