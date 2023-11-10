import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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

export { AppUI }