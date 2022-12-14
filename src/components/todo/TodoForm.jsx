import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import styled from 'styled-components';
import useMutation from '../../utils/hooks/useMutation';

const TodoForm = ({ setTodoList }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [submitTodo, { data, isLoading, error }] = useMutation({
    url: '/todos',
    method: 'POST',
  });
  const [todo, setTodo] = useState('');

  const onChange = event => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (todo === '') {
      return;
    }
    submitTodo({ todo });
    setTodo('');
  };

  useEffect(() => {
    if (data) {
      setTodoList(prev => [
        ...prev,
        {
          id: data.id,
          isCompleted: data.isCompleted,
          todo: data.todo,
          userId: data.userId,
        },
      ]);
    }
  }, [data, setTodoList, todo.id, todo.isCompleted]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  return (
    <ToDoContainer onSubmit={handleSubmit}>
      <ToDoInput
        onChange={onChange}
        value={todo}
        type="text"
        error={Boolean(errorMessage)}
        placeholder={errorMessage || '할 일을 입력해주세요.'}
      />
      <ToDoButton>{isLoading ? 'Loading...' : <FaPlus size={18} />}</ToDoButton>
    </ToDoContainer>
  );
};
export default TodoForm;

const TodoButton = styled.button`
  background-color: ${props => props.theme.color.activeColor.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  color: white;
  cursor: pointer;
  transition: ${props => props.theme.transition.md};
  &:hover {
    background-color: ${props => props.theme.color.activeColor.md};
  }
`;

const ToDoContainer = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: 0;
  padding: ${props => props.theme.mp.sm} ${props => props.theme.mp.lg};
`;

const ToDoInput = styled.input`
  border: 1px solid black;
  width: 80%;
  padding: ${props => props.theme.mp.sm} ${props => props.theme.mp.sm};
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid ${props => props.theme.color.bg.xl};
  margin-right: ${props => props.theme.mp.sm};
  font-size: ${props => props.theme.textSize.md};
  transition: ${props => props.theme.transition.md};
  background-color: white;
  &::placeholder {
    color: ${props =>
      props.error ? props.theme.color.red.md : props.theme.color.textColor.sm};
    font-size: ${props => props.theme.textSize.sm};
  }
  &:focus {
    border: 1.5px solid ${props => props.theme.color.activeColor.sm};
  }
`;
const ToDoButton = styled(TodoButton)`
  width: 10%;
  padding: ${props => props.theme.mp.sm};
`;
