import { todos } from './state';

export const CurrentState = () => (
  <div class="flex flex-col gap-2 mt-2 items-center w-full">
    <p>Current state:</p>
    <code class="flex bg-gray-100 p-3 rounded-sm w-full justify-center">
      <pre>{JSON.stringify(todos(), null, 2)}</pre>
    </code>
  </div>
);
