import React from 'react'
import { TodoContext } from '../../Context/TodoContext'
import '../CreateTodoButton/CreateTodoButton.css'

function CreateTodoButton() {

    const {
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <button className='w-16 h-16 rounded-full text-5xl font-bold grid place-items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500
        transition-transform rotate-0 hover:rotate-180'
            onClick={
                () => {
                    setOpenModal(value => !value)
                }
            }>
            +
        </button>
    )
}

export { CreateTodoButton }