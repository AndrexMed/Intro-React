// import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './Components/TodoCounter/TodoCounter'
import { TodoSearch } from './Components/TodoSearch/TodoSearch'
import { TodoList } from './Components/TodoList/TodoList'
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';

const defaultTodos = [
  { text: "Ver Netflix", completed: true },
  { text: "Ver YouTube", completed: false },
  { text: "Ver Google", completed: true },
]

function App() {
  return (
    <>
      <div className="flex justify-center border h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

        <div className='h-3/4 mt-4 rounded-md flex flex-col items-center relative bg-blue-300'>

          <TodoCounter completed={3} total={5} />
          <TodoSearch />

          <TodoList>
            {defaultTodos.map(item => (
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed} />
            ))}
          </TodoList>

          <div className='absolute bottom-4 right-4'>
            <CreateTodoButton />
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
