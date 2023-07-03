import { createSignal } from 'solid-js';
import { addTodo } from './state';

export const AddTodoForm = () => {
  const [text, setText] = createSignal('');

  return (
    <div class="flex items-center space-x-2">
      <input
        type="text"
        class="border border-gray-300 rounded-md px-4 py-2 w-64"
        placeholder="add a todo"
        value={text()}
        onInput={e => setText(e.currentTarget.value)}
      />
      <button
        type="button"
        class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          addTodo(text());
          setText('');
        }}
      >
        Add a todo
      </button>
    </div>
  );
};
