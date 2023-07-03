import { createSignal } from 'solid-js';
import { Todo } from './types';

const initialState = JSON.parse(localStorage.getItem('todos') || '[]');
const [signalTodos, setSignalTodos] = createSignal<Todo[]>(initialState);

const setTodosInLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(signalTodos()));
};

export const todos = signalTodos;

export const setTodos = setSignalTodos;

export const addTodo = (text: string) => {
  const newTodo = {
    text,
    done: false,
  };
  setTodos(prev => [
    ...prev,
    {
      ...newTodo,
      id: prev.length + 1,
    },
  ]);

  setTodosInLocalStorage();
};

export const deleteTodo = (id: number) => {
  const remove = (todo: Todo) => todo.id !== id;
  setTodos(prev => prev.filter(remove));

  setTodosInLocalStorage();
};

export const editTodo = (id: number, text: string) => {
  const edit = (todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        text,
      };
    }
    return todo;
  };
  setTodos(prev => prev.map(edit));

  setTodosInLocalStorage();
};

export const toggleTodo = (id: number) => {
  const toggle = (todo: Todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        done: !todo.done,
      };
    }
    return todo;
  };
  setTodos(prev => prev.map(toggle));

  setTodosInLocalStorage();
};
