import React from 'react'

function TodoSearch() {
    return (
        <div className='w-5/6'>
            <input className="w-full h-12 text-2xl p-2 border rounded-lg focus:outline-orange-700 shadow-xl" type="text" placeholder="Write a task..."
                onChange={(event) => {
                    console.log(event.target.value)
                }} />
        </div>
    )
}

export { TodoSearch }