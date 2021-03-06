import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../Context';

const TodoHeader = () => {
  const todos = useTodoState();
  const undoneTask = todos.filter(todo => !todo.done);

  const today = new Date();
  const date = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const day = today.toLocaleString('ko-KR', { weekday: 'long' });

  return (
    <Header>
      <h1>{date}</h1>
      <div className="day">{day}</div>
      <div className="task">할 일 {undoneTask.length}개</div>
    </Header>
  );
}

const Header = styled.div`
  padding: 40px 30px 25px;
  border-bottom: 1px dashed #ddd;
  h1 {
    margin: 0;
    font-size: 35px;
    color: #222;
  }
  .day {
    margin-top: 4px;
    color: #999;
    font-size: 20px;
  }
  .task {
    color: skyblue;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

export default TodoHeader;
