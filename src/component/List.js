import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useTodoState } from '../Context';

const TodoList = () => {
  const todos = useTodoState();

  return (
    <List>
      {todos.map(o => (
        <Item
          key={o.id}
          id={o.id}
          text={o.text}
          done={o.done}
        />
      ))}
    </List>
  );
}

const List = styled.div`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
`;

export default TodoList;
