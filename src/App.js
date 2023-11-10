// import logo from './logo.svg';
import './App.css';
import { TodoCounter } from './Components/TodoCounter/TodoCounter'
import { TodoSearch } from './Components/TodoSearch/TodoSearch'
import { TodoList } from './Components/TodoList/TodoList'
import { TodoItem } from './Components/TodoItem/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton/CreateTodoButton';

import React, { useState } from 'react';

// const defaultTodos = [
//   { text: "Ver Netflix", completed: true },
//   { text: "Ver YouTube", completed: false },
//   { text: "Ver Google", completed: true },
//   { text: "Dormir", completed: false }
// ]

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName)

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue))
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
  }

  return [item, saveItem];
}

function App() {

  const [searchValue, setSearchValue] = useState('');
  //console.log("Los usuarios buscan todos de: ", searchValue)
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  //Estados derivados:
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <div className="flex justify-center border h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

        <div className='h-auto mt-4 rounded-md flex flex-col items-center relative bg-blue-300'>

          <TodoCounter completed={completedTodos} total={totalTodos} />

          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue} />

          <TodoList>

            {searchedTodos.map(item => (
              <TodoItem
                key={item.text}
                text={item.text}
                completed={item.completed}
                onCompleted={() => {
                  completeTodo(item.text)
                }}
                onDelete={() => {
                  deleteTodo(item.text)
                }} />
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
