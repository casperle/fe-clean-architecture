import { useTodoController } from './useTodoController';
import { TodoItem } from './components/TodoItem';
import { AddTodo } from './components/AddTodo';

import { wrap } from '../../utils/wrap';

import { Todo, TodoList as TodoListType } from '../../../domain/struct/todo';

type TodoListProps = {
  todos: TodoListType;
  isLoading: boolean;
};

const TodoListComponent = ({ todos, isLoading }: TodoListProps) => {
  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <AddTodo />
      <ul className="tasks-list">
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export const TodoList = wrap(TodoListComponent, [useTodoController]);
