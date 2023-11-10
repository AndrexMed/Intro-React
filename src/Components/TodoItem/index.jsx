import React from 'react'
import { CheckIcon } from '../Icons/CheckIcon'
import { DeleteIcon } from '../Icons/DeleteIcon'

function TodoItem(props) {
    return (
        <li className='relative w-full flex justify-center gap-4 border hover:border-cyan-300 shadow-lg text-3xl p-2'>
            <span
                className={`absolute left-1 font-bold cursor-pointer hover:text-green-500 ${props.completed && 'text-green-600'}`} onClick={props.onCompleted}>
                <CheckIcon />
            </span>
            <p className={`font-semibold ${props.completed && 'line-through'}`}>
                {props.text}
            </p>
            <span className='absolute right-2 -top-4 hover:text-red-500 font-bold cursor-pointer' onClick={props.onDelete}>
                <DeleteIcon/>
            </span>
        </li>
    )
}

export { TodoItem }