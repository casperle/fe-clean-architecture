export type TodoId = number;

export interface Todo {
  id: TodoId;
  name: string;
  completed: boolean;
  userId: number;
}

export type TodoList = Todo[];
