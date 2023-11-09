import React, { useState } from 'react'

function TodoSearch() {
    const [searchValue, setSearchValue] = useState('');
    //console.log("Los usuarios buscan todos de: ", searchValue)

    return (
        <div className='w-5/6'>
            <input className="w-full h-12 text-2xl p-2 border rounded-lg focus:outline-orange-700 shadow-xl" type="text" placeholder="Write a task..."
                value={searchValue}
                onChange={(event) => {
                    setSearchValue(event.target.value)
                    //console.log(event.target.value)
                }} />
        </div>
    )
}

export { TodoSearch }