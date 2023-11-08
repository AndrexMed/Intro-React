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
  { text: "Ver Google", completed: false },
]

function App() {
  return (
    <>
      <div className="flex justify-center border h-screen bg-zinc-400 ">

        <div className='w-1/2 border flex flex-col items-center'>
          <TodoCounter completed={3} total={5} />
          <TodoSearch />

          <div className='border w-2/3 mt-4 rounded flex justify-center'>
            <TodoList>
              {defaultTodos.map(item => (
                <TodoItem 
                key={item.text} 
                text={item.text}
                completed={item.completed}/>
              ))}
            </TodoList>
          </div>

          <CreateTodoButton />
        </div>

      </div>
    </>
  );
}

export default App;
