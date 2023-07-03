import { For } from 'solid-js';
import { AddTodoForm } from './AddTodoForm';
import { CurrentState } from './CurrentState';
import { Todo } from './Todo';
import { todos } from './state';

export const TodoList = () => {
  return (
    <div class="max-w-xl flex flex-col mx-auto items-center rounded-sm border-2 border-solid border-gray-200 p-4 w-full">
      {todos().length ? (
        <ul>
          <For each={todos()}>
            {todo => (
              <li>
                <Todo {...todo} />
              </li>
            )}
          </For>
        </ul>
      ) : (
        <div>
          <p class=" font-semibold mb-2">No todos yet...</p>
        </div>
      )}
      <AddTodoForm />
      <CurrentState />
    </div>
  );
};
