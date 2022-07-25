import { useMemo } from 'react';

import { useQuery } from '../lib/useQuery';
import { useMutation } from '../lib/useMutation';
import { queryClient } from '../connectors/ApiConnector';

import { TodoRepository } from '../../infrastructure/api/TodoRepository';
import { UserId } from '../../domain/struct/user';

export const useTodoList = (userId: UserId) => {
  // load todos and save to cache
  const { isLoading, error, data } = useQuery(
    ['getTodos', { id: userId }],
    () => TodoRepository.getTodos(userId)
  );

  return useMemo(() => ({ todos: { isLoading, error, data } }), [
    isLoading,
    error,
    data,
  ]);
};

export const useUpdateTodo = () => {
  const { mutateAsync, isLoading, error } = useMutation(
    ['updateTodo'],
    TodoRepository.updateTodo,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );

  return useMemo(() => ({ isLoading, updateTodo: mutateAsync }), [isLoading]);
};

export const useAddTodo = () => {
  const { mutateAsync, isLoading, error } = useMutation(
    ['addTodo'],
    TodoRepository.addTodo,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );

  return useMemo(() => ({ isLoading, addTodo: mutateAsync }), [isLoading]);
};

export const useDeleteTodo = () => {
  const { mutateAsync, isLoading, error } = useMutation(
    ['deleteTodo'],
    TodoRepository.deleteTodo,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getTodos');
      },
    }
  );

  return useMemo(() => ({ isLoading, deleteTodo: mutateAsync }), [isLoading]);
};
