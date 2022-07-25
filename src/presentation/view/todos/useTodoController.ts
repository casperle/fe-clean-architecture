import { useMemo } from 'react';

import { useTodoList } from '../../adapters/todoAdapter';
import { useUserData } from '../../adapters/userAdapter';

export const useTodoController = () => {
  const { user } = useUserData();

  const {
    todos: { isLoading, data },
  } = useTodoList(user.id);

  return useMemo(() => ({ isLoading, todos: data }), [isLoading, data]);
};
