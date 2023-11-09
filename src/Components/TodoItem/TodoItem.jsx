import React from 'react'

function TodoItem(props) {
    return (
        <li className='relative w-full flex justify-center gap-4 border hover:border-cyan-300 shadow-lg text-3xl p-2'>
            <span
                className={`absolute left-1 font-bold cursor-pointer ${props.completed && 'text-green-600'}`} onClick={props.onCompleted}>
                V
            </span>
            <p className={`font-semibold ${props.completed && 'line-through'}`}>
                {props.text}
            </p>
            <span className='absolute right-2 -top-5 hover:text-red-500 font-bold cursor-pointer' onClick={props.onDelete}>
                X
            </span>
        </li>
    )
}

export { TodoItem }