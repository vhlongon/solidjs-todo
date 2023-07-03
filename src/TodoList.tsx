import { AddTodoForm } from './AddTodoForm';
import { CurrentState } from './CurrentState';
import { Todo } from './Todo';
import { todos } from './state';

export const TodoList = () => (
  <div class="max-w-xl flex flex-col mx-auto items-center rounded-sm border-2 border-solid border-gray-200 p-4 w-full">
    {todos().length ? (
      <ul>
        {todos().map(todo => (
          <li>
            <Todo {...todo} />
          </li>
        ))}
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
