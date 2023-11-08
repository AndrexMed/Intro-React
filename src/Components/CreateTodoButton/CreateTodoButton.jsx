import React from 'react'

const STYLES = {
    // backgroundColor : "blue"
}

function CreateTodoButton() {
    return (
        <button style={STYLES} className='w-20 h-20 rounded-full text-5xl flex items-center justify-center bg-cyan-50 hover:bg-cyan-100'>+</button>
    )
}

export { CreateTodoButton }