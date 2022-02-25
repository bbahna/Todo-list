import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const TodoList = () => {
  return (
    <List>
      <Item text="styled-components를 통한 컴포넌트 스타일링" done={true} />
      <Item text="Context API를 사용한 전역 상태관리" done={true} />
      <Item text="기능 구현하기(배열 상태 다루기)" done={false} />
    </List>
  );
}

const List = styled.div`
  flex: 1;
  padding: 20px 30px;
  overflow-y: auto;
`;

export default TodoList;
