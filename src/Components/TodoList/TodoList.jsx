import React from 'react'

function TodoList({ children }) {
    return (
        <ul className='w-5/6 mt-8 rounded flex flex-col gap-4'>
            {children}
        </ul>
    )
}

export { TodoList }