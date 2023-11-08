import React from 'react'
import '../TodoCounter/TodoCounter.css';

function TodoCounter({ completed, total }) {
    return (
        <div>
            <h1 className='font-bold text-4xl underline p-6 uppercase'>
                Haz completado {completed} de {total} Tareas
            </h1>
        </div>
    )
}

export { TodoCounter }