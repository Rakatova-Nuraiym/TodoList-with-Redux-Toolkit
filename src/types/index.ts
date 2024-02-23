export interface Todo {
  id: number;
  title: string;
  age: number;
  level: string;
  isCompleted: boolean;
}

export interface TodoList {
  todo: Todo[];
}
