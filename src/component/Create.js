import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <CreatePosition>
          <InputBox>
            <Input
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              autoFocus
            />
          </InputBox>
        </CreatePosition>
      )}
      <CircleBtn
        onClick={onToggle}
        open={open}
      >
        <MdAdd />
      </CircleBtn>
    </>
  );
}

const CreatePosition = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InputBox = styled.form`
  background: #f5f5f5;
  padding: 30px 30px 70px;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e5e5e5;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #e5e5e5;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const CircleBtn = styled.button`
  background: skyblue;
  transition: 0.125s all ease-in;
  &:hover {
    opacity: 0.85;
  }
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  font-size: 60px;
  border: none;
  outline: none;
  z-index: 5;
  cursor: pointer;
  ${props =>
    props.open &&
    css`
      background: tomato;
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

export default TodoCreate;
