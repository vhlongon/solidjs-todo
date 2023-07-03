import { createSignal } from 'solid-js';
import { deleteTodo, editTodo, toggleTodo } from './state';
import { Todo as TodoProps } from './types';

export const Todo = ({ done, id, text }: TodoProps) => {
  const name = `${id}-checkbox`;
  const [todoText, setTodoText] = createSignal(text);

  return (
    <>
      <form class="flex items-center justify-between my-2 p-2 gap-2 border border-gray-300 rounded">
        <div class="flex items-center">
          <input
            id={name}
            type="checkbox"
            value=""
            class="w-5 h-5 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2"
            checked={done}
            onClick={() => toggleTodo(id)}
            onkeydown={e => e.key === ' ' && toggleTodo(id)}
          />
          <label for={name} class="ml-2 text-sm font-medium">
            <input
              type="text"
              value={todoText()}
              onBlur={() => {
                editTodo(id, todoText());
              }}
              onInput={e => setTodoText(e.target.value)}
              class="border-none outline-none bg-transparent"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={() => deleteTodo(id)}
          class="flex items-center justify-center justify-items-center w-5 h-5 rounded bg-red-500 text-white hover:bg-red-600"
          tabIndex={0}
        >
          -
        </button>
      </form>
    </>
  );
};
