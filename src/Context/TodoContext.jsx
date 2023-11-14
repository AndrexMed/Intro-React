import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {

  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('');
  //console.log("Los usuarios buscan todos de: ", searchValue)

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
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider }