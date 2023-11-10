import React from 'react'
import '../TodoCounter/TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
        total === completed ?
            <div>
                <h1 className='font-bold text-4xl underline p-6 uppercase text-red-400'>
                    You don't have any to-dos
                </h1>
            </div>
            :
            <div>
                <h1 className='font-bold text-4xl underline p-6 uppercase'>
                    Have completed {completed} of {total} Tasks
                </h1>
            </div>
    );
}

export { TodoCounter }