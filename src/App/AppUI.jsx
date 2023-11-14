import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { TodoItem } from '../Components/TodoItem';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodosLoading } from '../Components/TodosLoading'
import { TodosError } from '../Components/TodosError'
import { EmptyTodos } from '../Components/EmptyTodos';
import { TodoContext } from '../Context/TodoContext';
import { Modal } from '../Components/Modal';
import { TodoForm } from '../Components/TodoForm';
import React from 'react';

function AppUI() {

    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <div className="flex justify-center border h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">

                <div className='h-auto mt-4 rounded-md flex flex-col items-center relative bg-blue-300'>

                    <TodoCounter />

                    <TodoSearch />

                    <TodoContext.Consumer>
                        {({
                            searchedTodos,
                            completeTodo,
                            deleteTodo,
                            loading,
                            error
                        }) => (
                            <TodoList>

                                {loading && <TodosLoading />}
                                {error && <TodosError />}
                                {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

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
                        )}
                    </TodoContext.Consumer>


                    <div className='absolute bottom-4 right-4 z-10'>
                        <CreateTodoButton />
                    </div>

                    {openModal && (
                        <Modal>
                            <TodoForm/>
                        </Modal>
                    )}
                </div>

            </div>
        </>
    );
}

export { AppUI }