import React from 'react'

function TodoCounter({ completed, total }) {
    return (
        <div>
            <h1 className='font-bold text-3xl underline p-5'>
                Haz completado {completed} de {total} Tareas
            </h1>
        </div>
    )
}

export { TodoCounter }