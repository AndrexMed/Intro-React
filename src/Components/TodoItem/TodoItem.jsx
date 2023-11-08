import React from 'react'

function TodoItem(props) {
    return (
        <li className='flex justify-between gap-4 border shadow'>
            <span>V</span>
            <p>{props.text}</p>
            <span>❌</span>
        </li>
    )
}

export { TodoItem }