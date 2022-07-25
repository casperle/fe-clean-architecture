import classnames from 'classnames';

import { useUpdateTodo, useDeleteTodo } from '../../../adapters/todoAdapter';

import { Todo } from '../../../../domain/struct/todo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { isLoading: isUpdateLoading, updateTodo } = useUpdateTodo();
  const { isLoading: isDeleteLoading, deleteTodo } = useDeleteTodo();
  const isLoading = isDeleteLoading || isUpdateLoading;

  const { completed, name } = todo;

  return (
    <li className="task-item">
      <div
        className={classnames(
          { 'task-item-completed': completed },
          'task-item-title'
        )}
      >
        {name}
      </div>
      <div className="task-action-buttons">
        {completed ? (
          <>
            <button
              className="update-task-button"
              onClick={() => {
                updateTodo({ ...todo, completed: false });
              }}
              disabled={isLoading}
            >
              Undo
            </button>

            <button
              className="remove-task-button"
              onClick={() => {
                deleteTodo(todo.id);
              }}
              disabled={isLoading}
            >
              Delete
            </button>
          </>
        ) : (
          <button
            className="remove-task-button"
            onClick={() => {
              updateTodo({ ...todo, completed: true });
            }}
            disabled={isLoading}
          >
            Done
          </button>
        )}
      </div>
    </li>
  );
};
