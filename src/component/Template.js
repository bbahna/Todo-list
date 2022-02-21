import React from 'react';
import styled from 'styled-components';

const TodoTemplate = ({ children }) => {
  return <Template>{children}</Template>;
}

const Template = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 50px auto;
  width: 500px;
  height: 700px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

export default TodoTemplate;
