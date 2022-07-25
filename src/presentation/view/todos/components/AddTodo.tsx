import React, { useState } from 'react';

import { useAddTodo } from '../../../adapters/todoAdapter';
import { useUserData } from '../../../adapters/userAdapter';

import { Todo } from '../../../../domain/struct/todo';
import { UserId } from '../../../../domain/struct/user';

const createTodoObj = (value: string, userId: UserId): Todo => {
  return {
    id: Date.now(),
    name: value,
    completed: false,
    userId,
  };
};

export const AddTodo = () => {
  const [value, setValue] = useState('');
  const { isLoading, addTodo } = useAddTodo();
  const { user } = useUserData();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert('Enter a todo item before adding!!');
      setValue('');
      return;
    }

    addTodo(createTodoObj(value, user.id));

    setValue('');
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add todo item"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled={isLoading}
      ></input>

      <button className="task-button" onClick={onSubmit} disabled={isLoading}>
        Save
      </button>
    </div>
  );
};
