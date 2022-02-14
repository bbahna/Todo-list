import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  padding: 40px 30px 25px;
  // border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 35px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 20px;
  }
  .task {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function TodoHeader() {
  return (
    <Header>
      <h1>2022년 2월 14일</h1>
      <div className="day">월요일</div>
      <div className="task">할 일 n개</div>
    </Header>
  );
}

export default TodoHeader;
