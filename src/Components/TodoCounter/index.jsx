import React from 'react'
import '../TodoCounter/TodoCounter.css';
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter() {

    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext);

    return (
        completedTodos === totalTodos ?
            <div>
                <h1 className='font-bold text-4xl underline p-6 uppercase text-red-400'>
                    You don't have any to-dos
                </h1>
            </div>
            :
            <div>
                <h1 className='font-bold text-4xl underline p-6 uppercase'>
                    Have completed {completedTodos} of {totalTodos} Tasks
                </h1>
            </div>
    );
}

export { TodoCounter }