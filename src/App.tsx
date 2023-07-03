import { TodoList } from './TodoList';

const App = () => {
  return (
    <div class="flex flex-col h-screen items-center justify-center">
      <h1 class="text-lg font-bold mb-4">TODO APP</h1>
      <TodoList />
    </div>
  );
};

export default App;
