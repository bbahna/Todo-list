import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const TodoItem = ({ id, text, done }) => {
  return (
    <Item>
      <CheckBtn done={done}>
        {done && <MdDone />}
      </CheckBtn>
      <Text done={done}>{text}</Text>
      <RemoveIcon>
        <MdDelete />
      </RemoveIcon>
    </Item>
  );
}

const RemoveIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ddd;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: tomato;
  }
  display: none;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${RemoveIcon} {
      display: initial;
    }
  }
`;

const CheckBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-size: 22px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid skyblue;
      color: skyblue;
    `}
`;

const Text = styled.div`
  flex: 1;
  color: #333;
  font-size: 20px;
  word-break: keep-all;
  ${props =>
    props.done &&
    css`
      color: #bbb;
    `}
`;

export default TodoItem;
