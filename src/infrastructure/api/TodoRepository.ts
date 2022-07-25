import { HttpClient } from '../service/HttpClient';

import { Todo, TodoId } from '../../domain/struct/todo';
import { UserId } from '../../domain/struct/user';

export const TodoRepository = {
  getTodos: (userId: UserId) => HttpClient.get(`todos?userId=${userId}`),

  updateTodo: (todo: Todo) => {
    const { id, ...rest } = todo;

    return HttpClient.put(`todos/${id}`, rest);
  },

  addTodo: (todo: Todo) => HttpClient.post(`todos`, todo),

  deleteTodo: (todoId: TodoId) => HttpClient.delete(`todos/${todoId}`),
};
