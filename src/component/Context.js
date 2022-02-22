import React, { useReducer, createContext, useContext } from 'react';

const TodoContext = [
  {
    id: 1,
    text: 'styled-components를 통한 컴포넌트 스타일링',
    done: true
  },
  {
    id: 2,
    text: 'Context API를 사용한 전역 상태관리',
    done: true
  },
  {
    id: 3,
    text: '기능 구현하기(배열 상태 다루기)',
    done: false
  }
];

const TodoReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, TodoContext);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export const useTodoState = () => {
  return useContext(TodoStateContext);
}

export const useTodoDispatch = () => {
  return useContext(TodoDispatchContext);
}
