import React from 'react'

function CreateTodoButton() {
    return (
        <button className='w-16 h-16 rounded-full text-5xl font-bold grid place-items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
        transition-transform rotate-0 hover:rotate-180'
            onClick={(event) => { console.log(event.target) }}>
            +
        </button>
    )
}

export { CreateTodoButton }